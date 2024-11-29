<form method="POST" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
    <?php wp_nonce_field('submit_contact_form', 'contact_form_nonce'); ?>
    <input type="hidden" name="action" value="submit_contact_form">
    <div>
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" required>
    </div>
    <div>
        <label for="message">Mensaje:</label>
        <textarea name="message" id="message" required></textarea>
    </div>
    <button type="submit">Enviar</button>
</form>