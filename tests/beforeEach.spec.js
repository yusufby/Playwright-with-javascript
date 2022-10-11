// example.spec.js
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page, isMobile }) => {
    test.fixme(isMobile, 'Settings page does not work in mobile yet');
  
    await page.goto('http://www.google.com');
  });
  
  test('user profile', async ({ page }) => {
    await page.locator('button:has-text("Accept all")').click();
   // await page.locator('aria-label:"Search")').fill("text");
    // ...
  });