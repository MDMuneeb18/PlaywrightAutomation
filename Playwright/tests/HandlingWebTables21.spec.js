const {test, expect} = require("@playwright/test");
const { table } = require("console");

test("Handling Web Tables", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const table = await page.locator("#productTable");
    //total no of rows and cols
    const cols = await table.locator("//thead//tr//th");
    console.log("Number of Columns are : ",await cols.count());

    const rows = await table.locator("//tbody//tr");
    console.log("Number of Rows are : ",await rows.count());

    await expect(await cols.count()).toBe(4);
    await expect(await rows.count()).toBe(5);

    // select particular product (below code filters on our need)
    const matchedRow = rows.filter({
        has : page.locator("td"),
        hasText : "Smartwatch"
    });
    await matchedRow.locator("//input").click();

    // If we want to select multiple check boxes we need to create reusable functions
    await selectProduct(rows, page, "Wireless Earbuds");
    await selectProduct(rows, page, "Laptop");

    // There will be multiple pages available and how to read the data from all pages
    const noOfPages= await page.$$("#pagination li a");
    console.log("Number of Pages in table : ",await noOfPages.length);

    for(let k=0; k<await noOfPages.length; k++){
        await noOfPages[k].click();
        for(let i=0; i<await rows.count(); i++){
            const currRow = rows.nth(i);//this will capture the specific row. This func starts from 0
            const tds = currRow.locator("td");
            for(let j=0; j<await cols.count() - 1; j++){
                console.log(await tds.nth(j).textContent());
            }
        }
        await page.waitForTimeout(3000);
    }

    await page.waitForTimeout(5000);
});

//Reusable function to select multiple products
async function selectProduct(rows, page, productName){//here page is fixture
    const matchedRow = rows.filter({
        has : page.locator("td"),
        hasText : productName
    });
    await matchedRow.locator("//input").click();
}