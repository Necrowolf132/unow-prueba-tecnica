<?php

/**
 * Tests para Unow_contact_Form_Admin class.
 * 
 */
class Test_Unow_Contact_Form_Admin extends WP_UnitTestCase
{
    /**
     * 
     * @var Unow_contact_Form_Admin
     */
    private $admin_instance;


    public function setUp(): void
    {
        //parent::setUp();


        if (!class_exists('Unow_contact_Form_Admin')) {
            require_once plugin_dir_path(__FILE__) . '../includes/class-unow-contact-form-admin.php';
        }
        $this->admin_instance = new Unow_contact_Form_Admin();

        global $wpdb;
        $table_name = $wpdb->prefix . 'unow_contact_form_entries';

        // Crear la tabla en la base de datos de pruebas
        $wpdb->query("CREATE TABLE IF NOT EXISTS $table_name (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME NOT NULL
        )");

        // Insertar datos ficticios en la tabla
        $wpdb->insert($table_name, [
            'name'      => 'John Doe',
            'email'     => 'johndoe@example.com',
            'message'   => 'Hola que tal',
            'created_at' => '2024-01-01 10:00:00'
        ]);
        $wpdb->insert($table_name, [
            'name'      => 'Jane Doe',
            'email'     => 'janedoe@example.com',
            'message'   => 'test',
            'created_at' => '2024-01-02 11:00:00'
        ]);
    }
    public function tearDown(): void
    {
        parent::tearDown();

        // Eliminar la tabla de pruebas después de cada prueba
        global $wpdb;
        $table_name = $wpdb->prefix . 'unow_contact_form_entries';
        $wpdb->query("DROP TABLE IF EXISTS $table_name");
    }
    public function test_add_admin_page()
    {
        do_action('admin_menu');
        global $menu;

        $this->assertArrayHasKey(20, $menu, "Menu no cargado correctamente");
        $menuArray = $menu[20];

        $this->assertTrue(in_array("Unow Contactos", $menuArray), "Falta Contactos");
        $this->assertTrue(in_array("Unow Contactos registrados", $menuArray), "Falta  Contactos registrados");
        $this->assertTrue(in_array("unow-contact-form-entries", $menuArray), "falta el icono del email");
        $this->assertTrue(in_array("dashicons-email", $menuArray), "falta el icono del email");
    }

    public function test_render_admin_page()
    {
        // Instanciamos el objeto de la clase que contiene el método render_admin_page
        $admin_page = new Unow_contact_Form_Admin();

        // Capturamos la salida de la función render_admin_page
        ob_start();
        $admin_page->render_admin_page();
        $output = ob_get_clean();

        // Verificamos si el contenido esperado está presente en la salida
        $this->assertStringContainsString('<h1>Contactos registrados</h1>', $output);
        $this->assertStringContainsString('<td>John Doe</td>', $output);
        $this->assertStringContainsString('<td>johndoe@example.com</td>', $output);
        $this->assertStringContainsString('<td>Hola que tal</td>', $output);
        $this->assertStringContainsString('<td>2024-01-01 10:00:00</td>', $output);
        $this->assertStringContainsString('<td>Jane Doe</td>', $output);
        $this->assertStringContainsString('<td>janedoe@example.com</td>', $output);
        $this->assertStringContainsString('<td>test</td>', $output);
        $this->assertStringContainsString('<td>2024-01-02 11:00:00</td>', $output);
    }
}
