const {test, expect} = require("@playwright/test");

test("Handling iframes", async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //await page.frameLocator("frame[src = \"frame_3.html\"]").locator("//input[@name=\"mytext3\"]").fill("Hello 12345");

    const frame3 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"});

    // Handling Nested Frame
    
    const insideFrames = await frame3.childFrames();
    //retrieves all frames present in frame3 in form of array//JS arrays are technically objects
    console.log(typeof(insideFrames), insideFrames.length);

    await insideFrames[0].locator("(//div[@class ='AB7Lab Id5V1'])[2]").click();

    await page.waitForTimeout(3000);
});