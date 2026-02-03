const {test, expect } = require("@playwright/test");

test("Builtin-Locators", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // page.getByAltText("give the alternative text")
    // this is used to locate an element usually by image which contains alternative text
    // (recall the concept of alt text in JS - if image not found then in place of image that alternate text will be displayed)
    const logosAlteText = await page.getByAltText("company-branding");
    await expect(logosAlteText).toBeVisible();

    // page.getByPlaceholder("give placeholder value")
    // this is used to locate an element usually input boxes which will be having placeholder text
    // (recall the concept of placeholder in JS - in input box before entering any text that placeholder 
    // value given will be visible to us like it will be giving th idea of what we can enter)
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    // page.getByRole("specify role", {specify attribute in that tag : "give value of specified attr"})
    // this is used for mainly actionable elements like buttons, links etc 
    await page.getByRole("button", {type: "submit"}).click();

    const userName = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    console.log("*****************",userName,"*************");
    await expect(await page.getByText(userName)).toBeVisible();

});