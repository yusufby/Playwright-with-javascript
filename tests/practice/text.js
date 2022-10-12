const { chromium } = require ('playwright');

(async()=>
//function code
{const browser = await chromium.launch({headless:false, slowMo: 100})
const page= await  browser.newPage();
await page.goto('');
const email=await page.$('#email');
email.type('yusufdandkand@gmail.com',{delay : 500 });
await browser.close();
}
)();

