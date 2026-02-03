const {test, expect} = require("@playwright/test");

test("Check Boxes", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.locator("#sunday").check();
    //await expect(page.locator("#sunday")).toBeChecked();
    await expect(page.locator("#sunday").isChecked()).toBeTruthy();
    await expect(await page.locator("#monday").isChecked()).toBeFalsy();

    const checkBoxLocators = ["#sunday", "#monday", "#friday"];
    // select multiple checkboxes
    for(let checkBoxLocator of checkBoxLocators){
        await page.locator(checkBoxLocator).check();
        await page.waitForTimeout(3000);
    }

    //unselect multiple checkboxes that are already selected
    for(let checkBoxLocator of checkBoxLocators){
        if( await page.locator(checkBoxLocator).isChecked() ){
            await page.locator(checkBoxLocator).uncheck();
            await page.waitForTimeout(3000);
        }
    }
    //await page.locator("#sunday").uncheck();

    //await page.waitForTimeout(5000);
});