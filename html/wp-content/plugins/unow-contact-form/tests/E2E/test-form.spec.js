const { test, expect } = require("@playwright/test");

test.use({
  headless: false, // Ejecuta el navegador en modo visible
  viewport: { width: 1280, height: 720 },
});
test("Prueba E2E de envío de formulario", async ({ page }) => {
  const formUrl =
    "https://unow-prueba-tecnica.develop.jeelidev.online/#unow-form";

  await page.goto(formUrl);

  await page.fill('input[name="name"]', "John Doe");
  await page.fill('input[name="email"]', "johndoe@example.com");
  await page.fill('textarea[name="message"]', "Este es un mensaje de prueba.");

  // Envía el formulario
  await page.click('button[type="submit"]');

  await page.waitForLoadState("load");

  // Verifica que la URL contenga el parámetro de éxito
  expect(page.url()).toContain("unow-success=true");

  // Verifica si el mensaje de éxito está visible
  const successMessage = await page.locator('[data-testid="gracias"]');
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toHaveText("¡Gracias por su registro!");
});

test("Verificar registros en WordPress admin", async ({ page }) => {
  const wpAdminUrl =
    "https://unow-prueba-tecnica.develop.jeelidev.online/wp-admin";
  const username = "necrowolf";
  const password = "RRjj88j$$##@@";

  // Inicia sesión en WordPress admin
  await page.goto(wpAdminUrl);
  await page.fill('input[name="log"]', username);
  await page.fill('input[name="pwd"]', password);
  await page.click("input#wp-submit");
  await page.waitForNavigation();

  // Navega al menú "Unow Contactos"
  await page
    .locator('a[href="admin.php?page=unow-contact-form-entries"]')
    .click();
  await page.waitForNavigation();

  // Verifica si la entrada de formulario guardada está en la tabla
  const name = "John Doe";
  const email = "johndoe@example.com";
  const message = "Este es un mensaje de prueba.";

  const entryRow = await page.locator(`text=${name}`).locator("..");
  const emailCell = await entryRow.locator("td", { hasText: email });
  const messageCell = await entryRow.locator("td", { hasText: message });

  // Verifica que la fila con los datos esté presente en la tabla
  await expect(entryRow).toBeVisible();
  await expect(emailCell).toBeVisible();
  await expect(messageCell).toBeVisible();
});
