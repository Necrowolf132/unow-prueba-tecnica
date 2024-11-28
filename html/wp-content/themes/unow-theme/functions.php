<?php

function elementor_starter_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('automatic-feed-links');
}
add_action('after_setup_theme', 'elementor_starter_setup');


function elementor_starter_scripts()
{
    wp_enqueue_style('main-unow-style', get_stylesheet_uri());
    wp_enqueue_script('unow-scripts', get_template_directory_uri() . '/assets/js/main-unow.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'elementor_starter_scripts');


function elementor_starter_elementor_support()
{
    add_theme_support('elementor');
}
add_action('after_setup_theme', 'elementor_starter_elementor_support');
