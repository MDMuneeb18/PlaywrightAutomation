const {test, expect} = require("@playwright/test");

test("Mouse Hover", async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register");

    const desktops = await page.locator("//a[text()=\"Desktops\"]");
    const computers = await page.locator("//a[text()=\"Computers\"]");

    //Mouse Hover
    await computers.hover();
    await desktops.hover();

    await page.waitForTimeout(5000);
});

test("Mouse Right Click", async ({page}) => {
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");

    const rightClickBtn = await page.locator("//span[text() = 'right click me']");
    const cutBtn = await page.locator("//span[text() = 'Cut']");

    // Right Click
    await rightClickBtn.click({button : 'right'});
    await page.waitForTimeout(3000);
    
    await cutBtn.click({button : 'right'});
    await page.waitForTimeout(3000);
});

test("Mouse Double Click", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    const doubleClickBtn = await page.locator("//*[text() = \"Copy Text\"]");

    await doubleClickBtn.dblclick();

    await expect(page.locator("#field2")).toHaveValue("Hello World!");
});

test.only("Mouse Drag and Drop", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Static.html");

    const sourceEle = await page.$$("#dragarea");
    const destPlace = await page.locator("#droparea");

    // Approach - 1
    // let i = 0;
    // while (i>sourceEle.length){
    //     await sourceEle[i].hover();
    //     await page.mouse.down();// left button pressing

    //     await destPlace.hover();
    //     await page.mouse.up();

    //     i = i+2;
    // }

    //Approach - 2
    let angular = await page.locator("#angular");
    let droparea = await page.locator("#droparea");

    await angular.dragTo(droparea);

    await page.waitForTimeout(5000);
});