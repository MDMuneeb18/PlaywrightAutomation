const {test, expect} = require("@playwright/test");

test("Handling Date Pickers", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // Same script cannot be used for every date picker
    // If the design changes according that we need to write our script

    // directly pass the date
    await page.fill("#datepicker", "12/18/2024");

    //sometimes it doesn't allow us to directly pass the date, then we need to write logic
    // first we need to define the day month and year. Then only we need to pass them
    const year = "2023";
    const month = "May";
    const date = "08";
    await page.click("#datepicker");//opens calendar

    while(true){
        const currMonth = await page.locator(".ui-datepicker-month").textContent();
        const currYear = await page.locator(".ui-datepicker-year").textContent();
        
        // if( currMonth == month && currYear == year){
        //     break;
        // }
        if( currYear == year){
            break;
        }
        if( year < currYear ){
            await page.locator(".ui-datepicker-prev.ui-corner-all").click();
        }
        else if ( year > currYear){
            await page.locator(".ui-datepicker-next.ui-corner-all").click();
        }        
    }
    //now select date
    // capture all dates
    // const dates = await page.$$("//*[@data-handler=\"selectDay\"]");
    // await dates[date-1].click();// can click with for loop also

    // directly select the date
    await page.locator(`//*[@data-handler="selectDay"]//a[text()='${date}']`)


    await page.waitForTimeout(5000);
})