<?php

/**
 * Plugin Name: Unow Contact Form
 * Description: Un plugin de WordPress para mostrar y gestionar un formulario de contacto como test tecnico para Unow.
 * Version: 1.0.0
 * Author: Jese Brito
 * Text Domain: unow-contact-form
 */

if (! defined('ABSPATH')) {
    exit;
}

// Definir constantes del plugin para path y url
define('UNOW_CONTACT_FORM_PATH', plugin_dir_path(__FILE__));
define('UNOW_CONTACT_FORM_URL', plugin_dir_url(__FILE__));

require_once UNOW_CONTACT_FORM_PATH . 'includes/class-unow-contact-form-handler.php';
require_once UNOW_CONTACT_FORM_PATH . 'includes/class-unow-contact-form-admin.php';


new Unow_contact_Form_Handler();
new Unow_contact_Form_Admin();

// Declaracion de aviso que indica que si desinstala el plugin borrara la base de datos
add_action('admin_notices', 'unow_contact_form_admin_notice');


register_activation_hook(__FILE__, 'unow_contact_form_activate');

function unow_contact_form_activate()
{
    global $wpdb;

    $table_name = $wpdb->prefix . 'unow_contact_form_entries';

    $charset_collate = $wpdb->get_charset_collate();
    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        name tinytext NOT NULL,
        email varchar(100) NOT NULL,
        message text NOT NULL,
        created_at datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";


    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}

register_uninstall_hook(__FILE__, 'unow_contact_form_uninstall');

function unow_contact_form_uninstall()
{
    global $wpdb;

    $table_name = $wpdb->prefix . 'unow_contact_form_entries';

    $wpdb->query("DROP TABLE IF EXISTS $table_name;");
}

function unow_contact_form_admin_notice()
{
    if (current_user_can('activate_plugins')) {
        echo '<div class="notice notice-warning is-dismissible">
                <p><strong>Aviso:</strong> Al desinstalar el plugin <em>Unow Contact Form</em>, todos los datos del formulario serán eliminados. Por favor, haga una copia de seguridad si es necesario.</p>
              </div>';
    }
}
