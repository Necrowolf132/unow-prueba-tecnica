<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php

    $is_elementor_template = get_post_meta(get_the_ID(), '_elementor_edit_mode', true);

    $is_front_page = is_front_page();

    if (!$is_elementor_template && !$is_front_page): ?>
        <section class="bg-[#1D2939] min-h-[300px] md:min-h-[500px] flex items-center justify-center pt-20">
            <h1 class="text-3xl font-bold text-center md:text-5xl text-gray-50"><?php the_title(); ?></h1>
        </section>
        <div class="container mx-auto min-h-[200px] max-w-[800px] px-4 pb-10 pt-10 prose">
            <?php the_content(); ?>
        </div>

    <?php else: ?>
        <!-- Plantilla en blanco para Elementor -->
        <div>
            <?php the_content(); ?>
        </div>
    <?php endif; ?>
</article>