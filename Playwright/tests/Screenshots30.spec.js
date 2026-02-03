import {test, expect} from "@playwright/test";
import { time } from "console";

const now = new Date();
const formattedDateTime = now.toISOString().replace(/[:.]/g, '-').replace('T', '_').replace('Z','');

test("Page Screenshot", async ({page}) => {
    await page.goto("https://demoblaze.com/index.html");
    //await page.screenshot("Pass Location")
    await page.screenshot({path : "C:\\Users\\2408342\\OneDrive - Cognizant\\Desktop\\Playwright\\tests\\Screenshots\\"+formattedDateTime+"Page Screenshot.png"});
});

test("Full Page Screenshot", async ({page}) => {
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForSelector(".card.h-100");
    //await page.screenshot({ path : "Pass Location", fullPage:true })
    await page.screenshot({path : "C:\\Users\\2408342\\OneDrive - Cognizant\\Desktop\\Playwright\\tests\\Screenshots\\"+formattedDateTime+"Full Page Screenshot.png", fullPage : true});
});

test("Element Screenshot",  async ({page}) => {
    await page.goto("https://demoblaze.com/index.html");

    await page.waitForSelector("(//img[@class='card-img-top img-fluid'])[1]");

    await page.locator("(//img[@class='card-img-top img-fluid'])[1]").screenshot({path : "C:\\Users\\2408342\\OneDrive - Cognizant\\Desktop\\Playwright\\tests\\Screenshots\\"+formattedDateTime+"Specific Web Element Screenshot.png"});
});