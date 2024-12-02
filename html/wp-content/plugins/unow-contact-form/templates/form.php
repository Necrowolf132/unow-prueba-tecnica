<div id="unow-form" class="unow-flex unow-items-center unow-justify-center unow-min-h-[500px] unow-p-4 unow-bg-gray-900 unow-rounded-xl">
    <div class="unow-w-full unow-flex-col unow-flex unow-items-center unow-justify-center unow-max-w-md">
        <?php if (isset($_GET['unow-success']) && $_GET['unow-success'] === 'true') : ?>
            <div class="unow-mt-4 unow-px-4 unow-py-2 unow-w-full unow-mb-4 unow-bg-green-100 unow-border unow-border-green-500 unow-rounded-lg unow-text-green-700 unow-flex unow-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="unow-h-5 unow-w-5 unow-mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-6.707a1 1 0 011.414 0L10 12.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                <span data-testid="gracias">¡Gracias por su registro!</span>
            </div>
        <?php endif; ?>
        <form
            method="POST"
            action="<?php echo esc_url(admin_url('admin-post.php')); ?>"
            class="unow-px-8 unow-pt-4 unow-pb-4 unow-mb-4 unow-text-white unow-w-full unow-bg-white unow-shadow-md unow-rounded-xl">
            <?php wp_nonce_field('submit_contact_form', 'contact_form_nonce'); ?>
            <input type="hidden" name="action" value="submit_contact_form" />

            <div class="unow-mb-4">
                <label class="unow-block unow-mb-2 unow-text-sm unow-font-bold unow-text-gray-700" htmlFor="name">
                    Nombre:
                </label>
                <input
                    class="unow-w-full unow-px-3 unow-py-2 unow-leading-tight unow-text-gray-700 unow-border unow-rounded unow-shadow unow-appearance-none unow-focus:outline-none unow-focus:shadow-outline"
                    type="text"
                    name="name"
                    id="name"
                    required />
            </div>

            <div class="unow-mb-4">
                <label class="unow-block unow-mb-2 unow-text-sm unow-font-bold unow-text-gray-700" htmlFor="email">
                    Email:
                </label>
                <input
                    class="unow-w-full unow-px-3 unow-py-2 unow-leading-tight unow-text-gray-700 unow-border unow-rounded unow-shadow unow-appearance-none unow-focus:outline-none unow-focus:shadow-outline"
                    type="email"
                    name="email"
                    id="email"
                    required />
            </div>

            <div class="unow-mb-6">
                <label class="unow-block unow-mb-2 unow-text-sm unow-font-bold unow-text-gray-700" htmlFor="message">
                    Mensaje:
                </label>
                <textarea
                    class="unow-w-full unow-h-32 unow-px-3 unow-py-2 unow-leading-tight unow-text-gray-700 unow-border unow-rounded unow-shadow unow-appearance-none unow-focus:outline-none unow-focus:shadow-outline"
                    name="message"
                    id="message"
                    required></textarea>
            </div>

            <div class="unow-flex unow-items-center unow-justify-center">
                <button class="unow-px-4 unow-py-2 unow-font-bold unow-text-white unow-bg-blue-500 unow-rounded unow-hover:bg-blue-700 unow-focus:outline-none unow-focus:shadow-outline" type="submit">Enviar</button>
            </div>
        </form>
    </div>
</div>