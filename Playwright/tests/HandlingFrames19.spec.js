//https://ui.vision/demo/webtest/frames/
const {test, expect} = require("@playwright/test");

test("Handling Frames", async ({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    let allFrames = await page.frames();// this returns all the frame objects present in that page
    console.log("No of Frames : ",allFrames.length);

    //interacting with frames
    //Approach - 1 : using name or url of the frame
    // if name attribute is there in html element then directly pass it
    // let frame1 = await page.frame("value of name attribute");
    
    //if url present
    let frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.fill("//input[@name = \"mytext1\"]", "Hello");

    // Approach - 2 : using frame locator
    await page.frameLocator("frame[src=\"frame_1.html\"]").locator("//input[@name=\"mytext1\"]").fill("Hello 123");
    //here frameLocator() will capture the frame. This will return frame locator object not frame
    //and locator will capture the element that we want to interact with

    await page.waitForTimeout(3000);
});