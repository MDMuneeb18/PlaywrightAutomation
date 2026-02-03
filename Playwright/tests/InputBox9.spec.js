const {test, expect} = require("@playwright/test");

test("Input Box", async ({page}) => {
    //await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    await page.goto("https://testautomationpractice.blogspot.com/");

    let nameField = await page.locator("#name");
    await expect(nameField).toBeVisible();
    await expect(nameField).toBeEmpty();
    await expect(nameField).toBeEditable();
    await expect(nameField).toBeEnabled();

    await nameField.fill("Mohammad Muneeb");

    await page.waitForTimeout(5000); //to pause code
});