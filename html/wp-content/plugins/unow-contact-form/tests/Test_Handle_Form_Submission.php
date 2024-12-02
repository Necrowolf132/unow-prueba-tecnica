<?php

/**
 * Tests para Unow_contact_Form_Handler class.
 */
class Test_Handle_Form_Submission extends WP_UnitTestCase
{


    /**
     * 
     * @var Unow_contact_Form_Handler
     */

    protected $table_name;
    public $user;
    protected $redirected_to;
    protected $exit_called;
    protected $to_redirect_callback;
    protected $form_instance;

    public function setUp(): void
    {


        if (!class_exists('Unow_contact_Form_Handler')) {
            require_once plugin_dir_path(__FILE__) . '../includes/class-unow-contact-form-handler.php';
        }
        $this->form_instance = new Unow_contact_Form_Handler();

        $this->to_redirect_callback = function ($location) {
            $this->redirected_to = $location;
            return false; // Evita la redirección real
        };
        add_filter('wp_redirect', $this->to_redirect_callback);
        global $wpdb;
        $this->user = wp_set_current_user(self::factory()->user->create(["role" => "administrator"]));
        $this->table_name = $wpdb->prefix . 'unow_contact_form_entries';

        // Crear la tabla personalizada si no existe
        $wpdb->query(
            "CREATE TABLE IF NOT EXISTS {$this->table_name} (
                id BIGINT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )"
        );
    }


    public function tearDown(): void
    {
        remove_filter('wp_redirect', $this->to_redirect_callback);
        parent::tearDown();

        global $wpdb;
        $wpdb->query("DROP TABLE IF EXISTS {$this->table_name}");
    }


    public function test_enqueue_styles()
    {



        $this->form_instance->enqueue_styles();


        $this->assertTrue(wp_style_is('unow-contact-form-styles', 'enqueued'));


        global $wp_styles;
        $registered_style = $wp_styles->registered['unow-contact-form-styles'];
        $this->assertEquals(
            plugins_url('\/unow-contact-form\/') . 'assets/unow-contact-form.css',
            $registered_style->src
        );
    }
    public function test_handle_form_submission_valid_data()
    {
        global $wpdb;

        $_POST = [
            'name'                => 'John Doe',
            'email'               => 'john.doe@example.com',
            'message'             => 'Test message',
            'contact_form_nonce'  => wp_create_nonce('submit_contact_form'),
        ];


        $this->form_instance->handler_save_form();


        $this->assertEquals(home_url('?unow-success=true#unow-form'), $this->redirected_to, 'La redirección no es correcta');


        $entry = $wpdb->get_row("SELECT * FROM {$this->table_name} WHERE email = 'john.doe@example.com'", ARRAY_A);
        $this->assertNotNull($entry);
        $this->assertEquals('John Doe', $entry['name'], "error el envio del nombre");
        $this->assertEquals('Test message', $entry['message'], "error enel envio del mansage");
        $this->assertEquals('john.doe@example.com', $entry['email'], "error enel envio del email");
    }

    public function test_handle_form_submission_invalid_nonce()
    {


        // Simular datos con un nonce inválido
        $_POST = [
            'name'                => 'John Doe',
            'email'               => 'john.doe@example.com',
            'message'             => 'Test message',
            'contact_form_nonce'  => 'invalid_nonce',
        ];

        $this->expectOutputRegex('/.*Verificación fallida\..*/s'); // El mensaje esperado en wp_die
        //$this->expectExceptionMessage('Verificación fallida.');

        /*add_filter('wp_die_handler', function () {
            return function ($message) {
                sprintf(
                    '<div class="wp-die-message">%s</div>',
                    $message
                );
                throw new Exception($message);
            };
        });*/

        $this->form_instance->handler_save_form();


        /*remove_filter('wp_die_handler', '__return_null');*/
    }

    public function test_render_form()
    {



        $output = $this->form_instance->render_form();

        // Verificar que el HTML coincide con la expresión regular para cadainput principal

        $url = esc_url(admin_url('admin-post.php'));

        $this->assertMatchesRegularExpression(
            '/<form[^>]*method\s*=\s*["\']POST["\'][^>]*action\s*=\s*["\']' . preg_quote($url, '/') . '["\'][^>]*>/i',
            $output,
            'Falta el formulario principal con el método POST y la acción correcta.'
        );

        $this->assertMatchesRegularExpression(
            '/<input[^>]*type\s*=\s*["\']hidden["\'][^>]*id\s*=\s*["\']contact_form_nonce["\'][^>]*name\s*=\s*["\']contact_form_nonce["\'][^>]*value\s*=\s*["\'][a-zA-Z0-9]{10,}["\'][^>]*>/i',
            $output,
            'Falta el input hidden de nonce en el formulario.'
        );
        $this->assertMatchesRegularExpression('/<input[^>]*type\s*=\s*["\']text["\'][^>]*name\s*=\s*["\']name["\'][^>]*id\s*=\s*["\']name["\'][^>]*required[^>]*>/', $output, "Falta el input name en el formulario, debería coincidir al menos con algo en el siguiente formato <input type='text' name='name' id='name' required>");

        $this->assertMatchesRegularExpression(
            '/<input[^>]*type\s*=\s*["\']hidden["\'][^>]*name\s*=\s*["\']action["\'][^>]*value\s*=\s*["\']submit_contact_form["\'][^>]*>/i',
            $output,
            "Falta el input action en el formulario, debería coincidir al menos con algo en el siguiente formato '<input type='hidden' name='action' value='submit_contact_form'>'"
        );

        $this->assertMatchesRegularExpression(
            '/<input[^>]*type\s*=\s*["\']email["\'][^>]*name\s*=\s*["\']email["\'][^>]*id\s*=\s*["\']email["\'][^>]*required[^>]*>/i',
            $output,
            "Falta el input email en el formulario, debería coincidir al menos con algo en el siguiente formato '<input type='email' name='email' id='email' required>'"
        );

        $this->assertMatchesRegularExpression(
            '/<textarea[^>]*name\s*=\s*["\']message["\'][^>]*id\s*=\s*["\']message["\'][^>]*required[^>]*>.*<\/textarea>/i',
            $output,
            "Falta el input message en el formulario, debería coincidir al menos con algo en el siguiente formato '<textarea name='message' id='message' required></textarea>'"
        );

        $this->assertMatchesRegularExpression(
            '/<button[^>]*type\s*=\s*["\']submit["\'][^>]*>.*<\/button>/i',
            $output,
            "Falta el botón de envío en el formulario. debería coincidir al menos con algo en el siguiente formato '<button type='submit'>Enviar</button>'"
        );
    }
}
