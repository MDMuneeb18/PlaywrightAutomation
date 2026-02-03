const {expect, test} = require("@playwright/test");

// We can skip a test by specifying .skip keyword after test keyword
test("Alert OK", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Dialog Handler(Enabling Alert Handling)
    // dialog is a keyword and we are storing this in dialogReceiver variable.
    // This variable is representing the dialog box. So with this variable we can do different validations
    page.on("dialog", async dialogReceiver => {
        //check which type of alert
        // if it is alert then it's type will be returned as "alert" for simple alerts
        await expect(dialogReceiver.type()).toContain("alert");
        
        //verify the message in alert
        await expect(dialogReceiver.message()).toContain("I am an alert b");
        //toContain() will accept partial text also

        await dialogReceiver.accept(); //to close the alert(clicking on OK btn)

    })
    //now locate the alert and click on it
    await page.click("#alertBtn");

    await page.waitForTimeout(5000);
});

test("Confirmation Dialog - Alert with OK and Cancel Btn", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Dialog Handler(Enabling Alert Handling)
    // dialog is a keyword and we are storing this in dialogReceiver variable.
    // This variable is representing the dialog box. So with this variable we can do different validations
    // In this test whenever an alert appears the below block of code gets executed
    page.on("dialog", async dialogReceiver => {
        //check which type of alert
        // if it is alert then it's type will be returned as "confirm" for confirmation alerts
        await expect(dialogReceiver.type()).toContain("confirm");
        
        //verify the message in alert
        await expect(dialogReceiver.message()).toContain("Press a button!");

        await dialogReceiver.accept();
        //await dialogReceiver.dismiss();
        //to close the alert(clicking on OK or CANCEL btn)

    })
    //now locate the alert and click on it
    await page.click("#confirmBtn");
    await expect(await page.locator("#demo").textContent()).toContain("You pressed OK!");
    //await expect(await page.locator("#demo").textContent()).toContain("You pressed Cancel!");
    await page.waitForTimeout(5000);
});

test("Prompt Dialog - Alert with input box as well as OK and Cancel Btn", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on("dialog", async dialogReceiver => {
        //check which type of alert
        // if it is alert then it's type will be returned as "prompt" for prompt alerts
        await expect(dialogReceiver.type()).toContain("prompt");
        
        //verify the message in alert
        await expect(dialogReceiver.message()).toContain("Please enter your name:");
        //defaultValue() - this will return if there is any value present in the input box of the alert
        await expect(dialogReceiver.defaultValue()).toContain("Harry Potter");
        //await dialogReceiver.accept("Mohammad Muneeb");
        await dialogReceiver.dismiss("Mohammad Muneeb");
        //to close the alert(clicking on OK or CANCEL btn after passing a value nto the input box)

    })
    //now locate the alert and click on it
    await page.click("#promptBtn");
    //await expect(await page.locator("#demo").textContent()).toContain("Hello Mohammad Muneeb! How are you today?");
    await expect(await page.locator("#demo").textContent()).toContain("User cancelled the prompt.");
    await page.waitForTimeout(5000);
});