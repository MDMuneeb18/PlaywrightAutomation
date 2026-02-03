const {test, expect} = require("@playwright/test");

test("Upload Single File", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForSelector("#singleFileInput");
    // even for multiple files or single file use this method. If there are multiple files enclose them in []
    await page.locator("#singleFileInput").setInputFiles("c:\\Users\\2408342\\Downloads\\Mohammad Muneeb (2).pdf");
    await page.locator("//button[text()=\"Upload Single File\"]").click();

    await page.waitForTimeout(5000);
});

test.only("Upload Multiple Files", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.waitForSelector("#multipleFilesInput");
    await page.locator("#multipleFilesInput").setInputFiles([ "c:\\Users\\2408342\\Downloads\\Mohammad Muneeb (2).pdf", "C:\\Users\\2408342\\Downloads\\VZM - BZA.pdf"]);
    await page.locator("//button[text()=\"Upload Multiple Files\"]").click();

    //await expect(await page.locator("#multipleFilesStatus br:nth-child(1)")).toHaveText("Mohammad Muneeb (2).pdf, Size: 305530 bytes, Type: application/pdf ");
    await page.waitForTimeout(5000);
    //Remove uploaded files - just pass empty array
    await page.locator("#multipleFilesInput").setInputFiles([]);
    await page.locator("//button[text()=\"Upload Multiple Files\"]").click();

    await expect(await page.locator("#multipleFilesStatus")).toHaveText("No files selected.");

    await page.waitForTimeout(5000);
});