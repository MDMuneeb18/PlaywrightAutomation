const {test, expect} = require("@playwright/test");

test.only("Keyboard Actions", async ({page}) => {
    await page.goto("https://gotranscript.com/text-compare");

    // if we are using attribute of a webelement then use enclose them in "[]"
    await page.locator("[name=\"text1\"]").fill("Welcome to Automation Testing");

    // For combination of 2 keys use press() command
    // Ctrl + A
    await page.keyboard.press("Control+A");

    // Ctrl + C
    await page.keyboard.press("Control+C");

    // If we are not using combination of keys then use down keyword to press and up keyword to release
    // Tab
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");// if don't write this it will work

    // Ctrl + V
    await page.keyboard.press("Control+V");

    await page.waitForTimeout(5000);
})