const {test, expect} = require("@playwright/test");

test("Auto Suggest Dropdown", async ({page}) =>{
    await page.goto("https://www.ixigo.com/trains?utm_source=bing&utm_medium=paid_search_bing_trains&utm_campaign=brand_search_desktop_bing&msclkid=20170666bd4118dd9eae6f43c63cae94&utm_term=ixigo&utm_content=Ad%20group%201");

    await page.locator("//input[@placeholder = \"Enter Origin\"]").click();
    await page.locator("//input[@placeholder = \"Enter Origin\"]").fill("Hydera");
    // here some places will be suggested when we fill Hydera.
    // We need to capture all those suggestions and then select one option from it
    await page.waitForSelector("//div[contains(@class, \"w-full bg-white overflow-auto rounded-20 bg-subbrand pt-15  shadow-500 no-scrollbar\")]");
    await page.waitForTimeout(5000);
    let fromCityPlaces = await page.$$("//p[contains(@class, \"body-md flex group-[.list-lg]:body-lg text-primary\")]");
    console.log(fromCityPlaces.length);
    for (let place of fromCityPlaces){
        const place1 = await place.textContent();
        //console.log(place1);
        if(place1.includes("Lingampalli (LPI)")){
            place.click();
            break;
        }
    }
    await page.waitForTimeout(5000);

    /*
    import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.abhibus.com/?msclkid=d0485c1b52c51ed17f08353e3b5477a4&utm_source=bing&utm_medium=cpc&utm_campaign=Abhibus_Brand_ROI&utm_term=abhibus&utm_content=Brand');
  await page.getByRole('textbox', { name: 'Leaving From' }).click();
  await page.getByRole('textbox', { name: 'Leaving From' }).click();
  await page.getByRole('textbox', { name: 'Leaving From' }).click();
  await page.getByRole('textbox', { name: 'Leaving From' }).fill('hyederaba');
  await page.locator('#aci-option-2').getByText('Hyderabad').click();
});
    */
});