const {test, expect} = require("@playwright/test");

test("Dropdowns Test", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //selecting 1 option in dropdown
    // the selectOption is having multiple ways
    // 1st way
    // 1) using label - selectOption({label : "give the exact text that are available from the dropdown menu"})
    // await page.locator("#country").selectOption({label : "India"});

    // // 2) by passing visible text directly - selectOption("give the exact text that is available from the dropdown menu")
    // await page.locator("#country").selectOption("India");
    // await page.waitForTimeout(3000);

    // // 3) by passing value of attr's value in html tag() value is attribute in the html option element )
    // await page.locator("#country").selectOption({value : 'uk'});
    // await page.waitForTimeout(3000);

    // //4) by passing index value
    // await page.locator("#country").selectOption({index : 1}); // here indexing starts from 0
    // await page.waitForTimeout(3000);

    // await page.selectOption("#country", {index: 2});
    // await page.selectOption("#country", "France");

    // Assertions in dropdowns
    // Check no of options in dropdown
    // 1.1) Check no of options in dropdown
    // capture dropdown locator and apply toHaveCount() function
    let optionsInDropdown = await page.locator("//*[@id= \"country\"]/option");
    console.log(typeof(optionsInDropdown));
    await expect(optionsInDropdown).toHaveCount(10);

    // 1.2) to retrieve all the options in array format
    let optionsArray = await page.$$("//*[@id= \"country\"]/option");
    console.log(typeof(optionsArray));
    console.log("Total No Of Options in DropDown : ",optionsArray.length);
    await expect(optionsArray.length).toBe(10);

    // now we want to check whether particular option is there in dropdown or not
    // 2) checking for presence of value in the dropdown
    // 2.1) 
    let content = await page.locator("#country").textContent();
    await expect(content.includes("India")).toBeTruthy();
    await expect(content.includes("Pakistan")).toBeFalsy();

    // capturing options in array and looping through it
    let optionsArray1 = await page.$$("#country");// only provide css selector locator
    let status = false;
    for(let option of optionsArray1){
        let value1 = await option.textContent();
        if( value1.includes("France") ){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();

    // we can select options in dropdown by looping also.
    // When select tag is not there or bootstrap dropdown is present this will be helpful
    optionsArray1 = await page.$$("xpath = //select[@id = \"country\"]/option");
    //optionsArray1 = await page.$$("#country option");
    // to give other locators specify the name of locator in prefix
    for(let option of optionsArray1){
        let value2 = await option.textContent();
        console.log(value2);
        if( value2.includes("France") ){
            await page.selectOption("#country", {label : value2.trim()});
            break;
        }
    }

    await page.waitForTimeout(5000);
});