<?php
if (! class_exists('Tailwind_Nav_Walker')) {
    class Tailwind_Nav_Walker extends Walker_Nav_Menu
    {
        function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
        {
            $classes = empty($item->classes) ? [] : (array) $item->classes;
            $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
            $class_names = $class_names ? ' ' . esc_attr($class_names) : '';

            $output .= '<li><a href="' . esc_url($item->url) . '" class=" text-center md:text-start hover:text-blue-400' . $class_names . ' block md:inline-block">';
            $output .= esc_html($item->title);
            $output .= '</a></li>';
        }
    }
}
