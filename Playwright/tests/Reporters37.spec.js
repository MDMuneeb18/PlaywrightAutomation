import { test, expect } from "@playwright/test";

test("Test - 1", async ({page}) => {
    await page.goto("https://demoblaze.com/index.html");
    await expect(page).toHaveTitle("STORE");
});

test("Test - 2", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
});

test("Test - 3", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
});