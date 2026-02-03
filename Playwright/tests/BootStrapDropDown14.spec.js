const {test, expect} = require("@playwright/test");

test("Bootstrap Dropdown", async ({page}) =>{
    //bootstrap dropdown don't have any select tag in our html elements
    // like traditional dropdownn options
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    // 1) capture the dropdown and click on it
    await page.locator(".multiselect").click();

    const options = await page.locator("ul>li label input");
    await expect(options).toHaveCount(11);

    const option = await page.$$("ul>li label");
    for(opt of option){
        let value = opt.textContent();
        if( value.includes("Java") || value.includes("Angular") ){
            await opt.click();
        }
    }

    await page.waitForTimeout(5000);
})