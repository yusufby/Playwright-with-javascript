import { test, expect, chromium } from '@playwright/test';

(async()=>
//function code
{const browser = await chromium.launch({headless:false, slowMo: 800})

//navigating a page inside browser
const page= await  browser.newPage();

//navigating to site
await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

//check the second checkbox
const checks=await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)');
checks[1].check;
checks[2].check;

//select the second radio button
const radios=await page.$$('//*[@id="main"]/div[3]/div[1]/input[4]');
await radios[1].check;

//close the browser
await browser.close();
}
)();