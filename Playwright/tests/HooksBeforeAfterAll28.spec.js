import {test, expect} from "@playwright/test";

let page;
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();// this will be used in the tests without using seperate page fixture
    // Since this must be referenced between tests commonly

    await page.goto("https://demoblaze.com/");
    // Login
    await page.locator("#login2").click();
    await page.locator("input#loginusername").fill("MohammadMuneeb");
    await page.fill("//input[@id = 'loginpassword']", "Faceoff");
    await page.locator("(//*[@class = 'btn btn-primary'])[3]").click();
});

test.afterAll( async () => {
    // Logout
    await page.locator("a#logout2").click();

    await page.waitForTimeout(5000);
});

test("Home Page Test", async () => { // no page fixture is passed since hooks are used

    // HomePage
    let products = await page.$$("//*[@class=\"card h-100\"]");
    await expect(products).toHaveLength(9);
    
});

test("Add Product to Cart", async () => {

    // Add Product to Cart
    await page.locator("(//*[@class=\"card h-100\"])[2]").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on("dialog", async dialogReciever => {
        await expect(dialogReciever.type()).toContain("alert");

        await expect(dialogReciever.message()).toContain("Product added.");

        await dialogReciever.accept();
    });
});