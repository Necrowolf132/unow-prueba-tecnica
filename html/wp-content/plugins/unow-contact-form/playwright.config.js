// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests/E2E",
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: "http://localhost:3000",
  },
});
