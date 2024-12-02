<?php
if (! class_exists('Unow_contact_Form_Admin')) {
    class Unow_contact_Form_Admin
    {

        public function __construct()
        {
            add_action('admin_menu', [$this, 'add_admin_page']);
        }

        public function add_admin_page()
        {
            add_menu_page(
                'Unow Contactos registrados',
                'Unow Contactos',
                'manage_options',
                'unow-contact-form-entries',
                [$this, 'render_admin_page'],
                'dashicons-email',
                20
            );
        }

        public function render_admin_page()
        {
            global $wpdb;
            $table = $wpdb->prefix . 'unow_contact_form_entries';
            $entries = $wpdb->get_results("SELECT * FROM $table");

            echo '<div class="wrap">';
            echo '<h1>Contactos registrados</h1>';
            echo '<table class="fixed widefat">';
            echo '<thead><tr><th>Nombre</th><th>Email</th><th>Mensaje</th><th>Fecha</th></tr></thead>';
            echo '<tbody>';

            foreach ($entries as $entry) {
                echo '<tr>';
                echo '<td>' . esc_html($entry->name) . '</td>';
                echo '<td>' . esc_html($entry->email) . '</td>';
                echo '<td>' . esc_html($entry->message) . '</td>';
                echo '<td>' . esc_html($entry->created_at) . '</td>';
                echo '</tr>';
            }

            echo '</tbody>';
            echo '</table>';
            echo '</div>';
        }
    }
}
