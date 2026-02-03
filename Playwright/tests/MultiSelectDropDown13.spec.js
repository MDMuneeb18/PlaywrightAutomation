const {test, expect} = require("@playwright/test");

test("Multi-Select Dropdown", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // passing the locator anf the options we want to select in a JS Array
    await page.selectOption("#colors", ["Red", "Green"]);

    //Assertions
    //Check no of options in dropdown
    let optionsInDropDown = await page.$$("#colors option");
    await expect(optionsInDropDown.length).toBe(7);

    let optionsInDropDown1 = await page.locator("#colors option");
    await expect(optionsInDropDown1).toHaveCount(7);

    //presence of option in dropdown
    let status = false;
    for(let option of optionsInDropDown){
        let text = await option.textContent();
        if( text.includes("Red") ){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    let optionsInDropDown2 = await page.locator("#colors");
    const content =await optionsInDropDown2.textContent();
    await expect(content.includes("Blue")).toBeTruthy();

    let optionsInDropDown3 = await page.$$("#colors");
    status = false;
    for(let option of optionsInDropDown3){ 
        let text = await option.textContent();
        if( text.includes("Green") ){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    let colours = await page.locator("#colors").textContent();
    await expect(colours.includes("Blue")).toBeTruthy();
    await expect(colours.includes("Black")).toBeFalsy();

    await page.waitForTimeout(4000);
});