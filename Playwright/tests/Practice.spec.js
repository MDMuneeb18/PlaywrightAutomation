const {test, expect} = require("@playwright/test");

test("Title of The Test", async ({page}) => {
    await page.goto("https://demoblaze.com/");

    const titleOfPage = await page.title();
    await expect(await page).toHaveTitle(titleOfPage);

    await page.waitForTimeout(5000);
});

test.only("Locators", async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.locator("a#login2").click();
    await page.locator("id = login2");

    await page.waitForTimeout(3000);
});