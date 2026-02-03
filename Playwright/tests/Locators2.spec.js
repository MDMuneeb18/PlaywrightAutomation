//const { test, expect } = require("@playwright/test");
import { test, expect } from "@playwright/test"

test("Locators", async ({page}) => {
    await page.goto("https://demoblaze.com/");
    await expect.toHaveTitle("STORE");

    //click on login button using property
    await page.locator('id=login2').click();

    // another method to perform the same above action
    //await page.click('id = login2');

    // provide username using CSS Selector
    await page.locator("input#loginusername").fill("MohammadMuneeb");
    //await page.fill("#loginusername", "Mohammad Muneeb");
    //await page.type("#loginusername", "Mohammad Muneeb");

    //provide password using xpath
    await page.fill("//input[@id = 'loginpassword']", "Faceoff");
    
    //click on login btn using xpath
    await page.locator("(//*[@class = 'btn btn-primary'])[3]").click();
    const logoutLink = await page.locator("id=logout2");
    await expect(logoutLink).toBeVisible();
    // await page.locator("a#logout2").click();

    await page.close();
});