const {test, expect } = require("@playwright/test");

test(" Hard Assertions", async ({page}) => {
    //open app url
    await page.goto("https://demo.nopcommerce.com/register");
    
    const url1 = await page.url();
    console.log(url1);
    await expect(page).toHaveURL(url1);
    await expect(page).not.toHaveURL("bnfdsx");

    const titleOfPage = await page.title();
    console.log(titleOfPage);
    await expect(page).toHaveTitle(titleOfPage);

    let logo = await page.getByAltText("nopCommerce demo store");
    await expect(logo).toBeVisible();

    let searchBox = await page.locator("#small-searchterms");
    await expect(searchBox).toBeEnabled();
    //await expect(searchBox).toBeDisabled();

    await page.locator("#gender-male").click();
    let genderRadio = await page.locator("#gender-male");
    await expect(genderRadio).toBeChecked();

    let checkBox = await page.locator("#NewsLetterSubscriptions_0__IsActive");
    await expect(checkBox).toBeChecked();

    await expect(await page.locator("#register-button")).toHaveAttribute("type", "submit");

    await expect(await page.locator(".page-title h1")).toHaveText("Register");

    await expect(await page.locator(".page-title h1")).toContainText("Reg");

    const emailInput = await page.locator("#Email");
    emailInput.fill("mdmuneeb622@gmail.com");
    await expect(emailInput).toHaveValue("mdmuneeb622@gmail.com");

    // let dropdownCount = await page.locator("//select[@name='DateOfBirthDay']/options")
    // await expect(dropdownCount).toHaveCount(13);
    
    await expect(await page.locator("#FirstName")).toBeEditable();
    await expect(await page.locator("#FirstName")).toBeEmpty();
    await expect(await page.locator("#FirstName")).toBeEnabled();
    
});