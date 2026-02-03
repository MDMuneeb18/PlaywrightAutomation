const {test, expect} = require('@playwright/test');
// we are saying that we need test and expect functions from the playwright/test module

//there is also another way to import these
//import { test, expect } from "@playwright/test"

// to start writing our test we need to use test block and in that we need to write anonymous function
// here we need to pass 2 parameters (1) title of the test (2) we need to pass anonymous function
// in this anonymous function we will use some fixture which is provided in playwright
// these fixture's contains so many functions. By these fixture's only we will access all commands
test("Home Page Test", async ({page}) => {
    // JavaScript is asynchronous programming language. Means the execution will not happen in 
    // a sequential manner. It won't wait until 1 step is executed.
    // so we use await and async commands
    //whenever we write await keyword in a function it is synchronous. 
    // So we need to represent it with async keyword. If we miss this keyword then no use of await keyword
    // await activation - async writing infront of function

    await page.goto("https://demoblaze.com/");//this command will be used to launch the browser
    var pageTitle = await page.title();// returns title of web page

    console.log("The Page Title is : ",pageTitle);
    //validation point for title - like assertions in TestNG
    await expect(page).toHaveTitle("STORE");

    const pageURL = page.url();//returns URL of the current page
    console.log("The URL of the page is : ",pageURL);

    //validation point for URL
    await expect(page).toHaveURL("https://demoblaze.com/");
    //to close the page
    await page.close();
} );