<footer class="py-8 text-white bg-gray-900">
    <div class="container px-4 mx-auto">

        <div class="flex flex-col items-center justify-between space-y-6 md:flex-row md:items-start md:space-y-0">

            <div class="flex items-center space-x-4">
                <?php
                $logo = get_theme_mod('custom_logo');
                if ($logo) {
                    echo '<a href="/"><img src="' . wp_get_attachment_url($logo) . '" alt="' . get_bloginfo('name') . '" class="w-auto h-12"></a>';
                } else {
                    echo '<a href="/"><img src="' . get_template_directory_uri() . '/assets/images/Logomark.png" alt="Default Logo" class="w-auto h-12"></a>';
                }
                ?>
                <span class="hidden text-lg font-semibold md:block">
                    <?php echo esc_html(get_bloginfo('name') ?? 'Untitled UI'); ?>
                </span>
            </div>


            <div class="text-center md:text-left">
                <p class="text-sm">Contacto:</p>
                <p class="text-sm">info@unow.es</p>
                <p class="text-sm">Torre Mapfre, Carrer Marina 16-18,</p>
                <p class="text-sm">08005 Barcelona, España</p>
                <p class="text-sm">Tlf: +34 645 39 95 47</p>
            </div>


            <div>
                <?php
                wp_nav_menu([
                    'theme_location' => 'menu_principal_theme_unow',
                    'walker'         => new Tailwind_Nav_Walker(),
                    'menu_class'     => 'flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-sm',
                ]);
                ?>
            </div>
        </div>

        <div class="mt-8 border-t border-gray-700"></div>


        <div class="mt-4 text-center">
            <p class="text-xs">&copy; <?php echo date('Y'); ?> Elementor Unow Theme. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>
</div>
<?php wp_footer(); ?>
</body>

</html>