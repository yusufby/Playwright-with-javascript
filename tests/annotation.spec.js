// @ts-check
const { test, expect } = require('@playwright/test');

//skipping a test//
test.skip('broken test', async ({ page }) => {
  console.log('skip oldu mu?');
});


  //failing a test//
test('not yet ready', async ({ page }) => {
  test.fail();
  // ...
});

//leave a test to fix//

test.fixme('test to be fixed', async ({ page }) => {
  // ...
});

//slow a test//

test('slow test', async ({ page }) => {
  test.slow();
  // ...
});

//focusing on a test//

// test.only('focus this test', async ({ page }) => {
//   // Run only focused tests in the entire project.
// });

//conditionally skip//

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
  console.log('firefox mu?');
});

//Group tests//

test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});

//Tag tests//

test('Test login page @fast', async ({ page }) => {
  // ...
});

test('Test full report @slow', async ({ page }) => {
  // ...
});

//Conditionally skip a group of tests//

test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test.beforeAll(async () => {
    // This hook is only run in Chromium.
  });

  test('test 1', async ({ page }) => {
    // This test is only run in Chromium.
  });

  test('test 2', async ({ page }) => {
    // This test is only run in Chromium.
  });
});

//Custom annotations//

test('user profile', async ({ page }) => {
  test.info().annotations.push({ type: 'issue', description: 'https://github.com/microsoft/playwright/issues/<some-issue>' });
  // ...
});

//Test Info//

test('basic test', async ({ page }, testInfo) => {
  expect(testInfo.title).toBe('basic test');
  
  // @ts-ignore
  await page.screenshot(testInfo.outputPath('screenshot.png'));
});
