const {test, expect} = require("@playwright/test");

test("Soft Assertions", async ({page}) => {
    await page.goto("https://demoblaze.com/");

    /*
    //Hard Assertions
    await expect(page).toHaveURL("https://demoblaze.com/");
    await expect(page).toHaveTitle("STORE123");// from here the remaining lines stop its execution
    await expect(await page.locator("#nava")).toBeVisible();
    */

    //Soft Assertions
    await expect.soft(page).toHaveURL("https://demoblaze.com/");
    await expect.soft(page).toHaveTitle("STORE123");
    // from here the remaining lines wont stop its execution even the assertion fails
    await expect.soft(await page.locator("#nava")).toBeVisible();
});