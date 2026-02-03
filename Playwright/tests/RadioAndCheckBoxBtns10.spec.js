const {test, expect} = require("@playwright/test");

test("Radio Buttons", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    let genderMaleRadio = await page.locator("#male");
    genderMaleRadio.check();
    //genderRadio.click();
    await expect(genderMaleRadio).toBeChecked();
    //await expect(genderMaleRadio.isChecked());
    //this will return a boolean value and with this we need to compare it with our expected value
    await expect(genderMaleRadio.isChecked()).toBeTruthy();

    //let genderFemaleRadio = await page.locator("#female");
    await expect(await page.locator("#female").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
});