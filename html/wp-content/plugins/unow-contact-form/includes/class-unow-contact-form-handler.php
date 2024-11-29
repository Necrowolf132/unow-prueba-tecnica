<?php
if (! class_exists('Unow_contact_Form_Handler')) {
    class Unow_contact_Form_Handler
    {

        public function __construct()
        {
            add_shortcode('unow_contact_form', [$this, 'render_form']);
            add_action('wp_enqueue_scripts', [$this, 'enqueue_styles']);
            add_action('admin_post_nopriv_submit_contact_form', [$this, 'handle_form_submission']);
            add_action('admin_post_submit_contact_form', [$this, 'handle_form_submission']);
        }

        public function enqueue_styles()
        {
            wp_enqueue_style('unow-contact-form-styles', UNOW_CONTACT_FORM_URL . 'assets/styles.css');
        }

        public function render_form()
        {
            ob_start();
            include UNOW_CONTACT_FORM_PATH . 'templates/form.php';
            return ob_get_clean();
        }

        public function handle_form_submission()
        {
            if (! isset($_POST['contact_form_nonce']) || ! wp_verify_nonce($_POST['contact_form_nonce'], 'submit_contact_form')) {
                wp_die('Verificación fallida.');
            }

            global $wpdb;
            $table = $wpdb->prefix . 'unow_contact_form_entries';

            $name    = sanitize_text_field($_POST['name']);
            $email   = sanitize_email($_POST['email']);
            $message = sanitize_textarea_field($_POST['message']);

            $wpdb->insert(
                $table,
                ['name' => $name, 'email' => $email, 'message' => $message, 'created_at' => current_time('mysql')],
                ['%s', '%s', '%s', '%s']
            );

            wp_redirect(home_url('/thank-you/'));
            exit;
        }
    }
}
