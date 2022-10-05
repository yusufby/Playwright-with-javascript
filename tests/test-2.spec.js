import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.google.com/
  await page.goto('https://www.google.com/');

  // Click button:has-text("Accept all")
  await page.locator('button:has-text("Accept all")').click();
  await expect(page).toHaveURL('https://www.google.com/');

  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();

  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('stv haber');

  // Press Enter
  await page.locator('[aria-label="Search"]').press('Enter');
  //await expect(page).toHaveURL('https://www.google.com/search?q=stv+haber&source=hp&ei=0CY8Y73lMt2RhbIPkKWf0A4&iflsig=AJiK0e8AAAAAYzw04F-BPSCk1Xc4mQZmbYmnYbtSlyD0&ved=0ahUKEwi9jaC6ycb6AhXdSEEAHZDSB-oQ4dUDCAk&uact=5&oq=stv+haber&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOg4IABCPARDqAhCMAxDlAjoOCC4QjwEQ6gIQjAMQ5QI6EQguEIAEELEDEIMBEMcBENEDOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6FAguEIAEELEDEIMBEMcBENEDENQCOggILhCABBCxAzoICC4QsQMQgwE6CwguEIAEELEDEIMBOg4ILhCABBCxAxCDARDUAjoICAAQsQMQgwE6BAgAEAM6DQgAEIAEELEDEIMBEAo6BwgAEIAEEAo6BQgAEIYDOggIABAeEA0QBToICAAQHhAIEA06DAgAEB4QDxAIEA0QCjoHCAAQgAQQDToGCAAQHhANUOUBWP0YYOUZaARwAHgAgAFXiAH3BpIBAjEymAEAoAEBsAEKuAEC&sclient=gws-wiz');

  // Click text=Son Dakika ve En Son Haberler || Samanyolu Haber || S Haber
  await page.locator('text=Son Dakika ve En Son Haberler || Samanyolu Haber || S Haber').click();
  await expect(page).toHaveURL('http://www.samanyoluhaber.com/');

  // Click #header >> text=SON DAKİKA
  await page.locator('#header >> text=SON DAKİKA').click();
  await expect(page).toHaveURL('http://www.samanyoluhaber.com/son-dakika-haberleri/');

  // Click text=İngiltere 'yasa dışı göçmenlerin sığınmacı başvurusu yapmasını engellemeye hazır
  await page.locator('text=İngiltere \'yasa dışı göçmenlerin sığınmacı başvurusu yapmasını engellemeye hazır').click();
  await expect(page).toHaveURL('http://www.samanyoluhaber.com/ingiltere-yasa-disi-gocmenlerin-siginmaci-basvurusu-yapmasini-engellemeye-hazirlaniyor-haberi/1399804/');
  //var item2=items[1];
});

test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});