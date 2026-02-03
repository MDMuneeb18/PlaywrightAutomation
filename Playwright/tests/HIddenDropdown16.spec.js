const {test, expect} = require("@playwright/test");

test("Hidden Dropdown Test", async ({page}) =>{
    //Hidden Dropdown - In this type of dropdown the dropdown contains options 
    // but they are hidden most of the time. And those options we can't directly inspect
    // we can't see select tag for this.
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(6000);
    await page.fill("//input[@placeholder = 'Username']", "Admin");
    await page.fill("//input[@placeholder = 'Password']", "admin123");
    await page.click("//button[@class= 'oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']");

    //await page.waitForSelector("//a[@class='oxd-main-menu-item active']");
    //await page.getByRole("button",{name : "PIM"});
    //await page.waitForTimeout(5000);
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    //click on options button
    await page.click("(//div[text() = '-- Select --'])[2]");

    await page.waitForSelector("//div[@class='oxd-select-dropdown --positon-bottom']//span");
    let hiddenOptionsDropdown = await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//span");

    console.log(hiddenOptionsDropdown.length);
    for(let option of hiddenOptionsDropdown){
        const textValue = await option.textContent();
        console.log(textValue);
        if(textValue.includes("QA Lead")){
            await option.click();
            //break;
        }
    }

    //await page.click("((//div[@class='oxd-select-option'])[4])/span"); // selecting "Chief Executive Officer"
    // this is hidden dropdown. Use debugger in Selectorshub and click on the dropdown it will freeze
    // the page then we can inspect hidden dropdown

    await page.waitForTimeout(5000);
});