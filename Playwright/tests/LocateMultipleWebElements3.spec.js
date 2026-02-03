import {test, expect} from "@playwright/test"

test("Locating Multiple WebElements", async ({page}) => {
    await page.goto("https://demoblaze.com/");

    // capture all the links in the web page
    const links = await page.$$("a");
    console.log("*************",typeof(links),"******************");
    // if we use "of" it will iterate over values in the array
    for(let link of links){ //this is the same as in java which is known as for Each loop 
                            // in java : is present and in javascript we use "of" keyword
        console.log(await link.textContent());
        // textContent() returns the text content of web element
        // in selenium we have getText() method
    }
    // if we use "in" then it will iterate over indexes like 0,1,2,...So we will encounter error at
    // "link.textContent()"

    // for(let link in links){
    //     console.log(await link.textContent());
    // }

    // capture the products visible on the page
    const products = await page.$$("//div[@id='tbodyid']//h4//a");
    console.log("PRODUCTS");
    for (let prod of products){
        console.log(await prod.textContent());
    }
});