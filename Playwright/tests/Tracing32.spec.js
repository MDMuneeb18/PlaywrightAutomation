import { expect, test } from "@playwright/test";

test("Video Recording of Test", async ({page}) => {
    await page.goto("https://demoblaze.com/");
    // Login
    await page.locator("#login2").click();
    await page.locator("input#loginusername").fill("MohammadMuneeb");
    await page.fill("//input[@id = 'loginpassword']", "Faceoff");
    await page.locator("(//*[@class = 'btn btn-primary'])[3]").click();

    await page.locator("(//*[@class=\"card h-100\"])[2]").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on("dialog", async dialogReciever => {
        await expect(dialogReciever.type()).toContain("alert");

        await expect(dialogReciever.message()).toContain("Product added.");

        await dialogReciever.accept();
    });

    // Logout
    await page.locator("a#logout2").click();

    await page.waitForTimeout(5000);
});