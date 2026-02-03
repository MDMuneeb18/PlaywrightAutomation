//Here we are importing browser because we are creating our own page. 
// We are not going to use existing page feature
const {test, expect, chromium} = require("@playwright/test");

test("Handling Windows/Pages", async () => {
    // Creating Browser
    // (1) Launch the Browser
    const browser = await chromium.launch();

    // (2) Create context
    //here we create new isolated session inside the launched Browser. 
    //when we create context we can create multiple pages
    const context = await browser.newContext();

    // (3) create pages
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    //to know total no of pages created from context
    let totalPages = context.pages();// this returns array of page objects
    console.log(`No of pages created : ${totalPages.length}`);

    // Now we have created our own pages. So now we can go with browser automation
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(await page1).toHaveTitle("OrangeHRM");

    await page2.goto("https://www.orangehrm.com/");
    await expect(await page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");
    await page1.waitForTimeout(4000);

})

test.only("Handling Multiple Windows/Pages", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(await page1).toHaveTitle("OrangeHRM");

    // we have opened a site and after opening we have clicked on a link in that site and the opens
    // in a new tab(this is an event). And now we want to switch between those 2 pages

    // whenever we are clicking on a link before we need to keep the page open empty
    const pagePromise = context.waitForEvent("page");// this returns a promise that resolves to new page instance
    //this will open the page with empty tab
    await page1.click("//a[text()=\"OrangeHRM, Inc\"]");
    // we are opening the page in empty tab and clicking on the link. After clicking on the link 
    // that link will open in empty tab
    const newPage = await pagePromise;//now we store that page in a variable which represents new tab
    //the above command will return a promise.
    await expect(await newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);
})