<?php get_header(); ?>

<main id="main" class="flex-1 bg-gray-100">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post();
            get_template_part('template-parts/content', get_post_format());
        endwhile;
    else :
        echo '<p>No hay contenido disponible.</p>';
    endif;
    ?>
</main>

<?php get_footer(); ?>