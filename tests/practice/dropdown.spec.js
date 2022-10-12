import { test, expect } from '@playwright/test';

(async()=>
//function code
{const browser = await chromium.launch({headless:false, slowMo: 800})
const page= await  browser.newPage();
await page.goto('https://the-internet.herokuapp.com/dropdown');

const dropDown=await page.$('#dropdown');
//value
await dropDown.selectOption({value : '1'});
//label 
await dropDown.selectOption({label : 'Option 2'});
//index
await dropDown.selectOption({index: 1});

//values inside this select
const availableOptions= await dropDown.$$('option');
for (let i=0 ; i< availableOptions.length, i++;){
   console.log(await availableOptions[i].innerText());
   
}




await browser.close();
}
)();