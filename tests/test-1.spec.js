import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.google.com/
  await page.goto('https://www.google.com/');

  // Click button:has-text("Reject all")
  await page.locator('button:has-text("Reject all")').click();
  await expect(page).toHaveURL('https://www.google.com/');

  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();

  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('stv haber');

  // Press Enter
  await page.locator('[aria-label="Search"]').press('Enter');
  //await expect(page).toHaveURL('https://www.google.com/search?q=stv+haber&source=hp&ei=vMQ5Y93NJeWx8gKgr4fABQ&iflsig=AJiK0e8AAAAAYznSzOWLoL7XP-WITwPbqeTc8c_XPxvI&ved=0ahUKEwjdm9zRg8L6AhXlmFwKHaDXAVgQ4dUDCAk&uact=5&oq=stv+haber&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOg4IABCPARDqAhCMAxDlAjoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOggIABCxAxCDAToUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CwguEIAEELEDEIMBOggILhCABBCxAzoICC4QsQMQgwE6DgguEIAEELEDEIMBENQCOgsILhCABBDHARDRAzoLCC4QgAQQxwEQrwE6BQguEIAEOgQIABAKOgcIABCxAxAKOgcIABCABBAKUJ4CWP0WYMAXaANwAHgAgAGPAYgB6QeSAQM2LjSYAQCgAQGwAQo&sclient=gws-wiz');

  // Click text=Son Dakika ve En Son Haberler || Samanyolu Haber || S Haber
  await page.locator('text=Son Dakika ve En Son Haberler || Samanyolu Haber || S Haber').click();
  await expect(page).toHaveURL('http://www.samanyoluhaber.com/');

});