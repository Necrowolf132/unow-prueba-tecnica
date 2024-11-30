<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div class="flex flex-col min-h-screen">
        <header id="main-header" class="fixed top-0 z-50 w-full transition-all duration-500 ease-in-out">
            <nav class="px-4 py-3 text-white">
                <div class="container flex items-center justify-between mx-auto">
                    <div class="flex items-center space-x-[40px] justify-between">
                        <div class="flex items-center">
                            <?php
                            // Obtiene el logo configurado en la personalización del tema para el logo.
                            $logo = get_theme_mod('custom_logo');

                            if ($logo) {
                                echo '<a href="/"><img src="' . wp_get_attachment_url($logo) . '" alt="' . get_bloginfo('name') . '" class="mr-2 h-11 w-11 md:h-8 md:w-8"></a>';
                            } else {
                                echo '<a href="/"><img src="' . get_template_directory_uri() . '/assets/images/Logomark.png" alt="Default Logo" class="mr-2 h-11 w-11 md:h-8 md:w-8"></a>';
                            }

                            $site_title = get_bloginfo('name');

                            // Obtiene el logo configurado en la personalización del tema para el titulo.
                            if ($site_title) {
                                echo '<span class="font-semibold text-[25px] md:text-xl">' . esc_html($site_title) . '</span>';
                            } else {
                                echo '<span class="font-semibold text-[25px] md:text-xl">Untitled UI</span>';
                            }

                            ?>
                        </div>
                        <!-- Desktop Menu -->
                        <div class="hidden md:flex">
                            <?php wp_nav_menu([
                                'theme_location' => 'menu_principal_theme_unow',
                                'walker'         => new Tailwind_Nav_Walker(),
                                'menu_class'     => 'menu-principal-theme-unow flex space-x-6',
                            ]); ?>
                        </div>
                    </div>


                    <div class="items-center hidden space-x-4 md:flex">
                        <a href="#" class="font-semibold text-[16px] hover:text-customTextHoverColor">Log in</a>
                        <a href="#" class="font-semibold text-[16px] bg-blue-600 hover:bg-blue-700 text-white px-[18px] py-[10px] rounded-[8px]">Sign up</a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button id="menu-btn" class="text-white md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-9 h-9 md:w-6 md:h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="hidden md:hidden">
                    <div class="p-4 mt-3 bg-gray-900 shadow-lg rounded-xl">
                        <?php wp_nav_menu([
                            'theme_location' => 'menu_principal_theme_unow',
                            'walker'         => new Tailwind_Nav_Walker(),
                            'menu_class'     => 'menu-principal-theme-unow-movile flex flex-col space-y-[20px] mt-4 mb-4',
                        ]); ?>
                        <a href="#" class="block font-semibold text-[16px] text-center bg-blue-600 hover:bg-blue-700  rounded  px-4 py-2 mt-2 text-white ">Log in</a>
                        <a href="#" class="block font-semibold text-[16px]  text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2">Sign up</a>
                    </div>
                </div>
            </nav>

        </header>