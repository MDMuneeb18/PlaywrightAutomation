import {test, expect} from "@playwright/test";

//only
// test.only("Test - 1", async ({page}) => {
//     console.log("This is my Test - 1, only annotation");
// });

//skip
// test.skip("Test - 2", async ({page}) => {
//     console.log("This is my Test - 2, skip annotation without condition");
// });

// skip test based on certain condition
// test("Test - 3", async ({page, browserName}) => {
//     if( browserName == 'chromium'){
//         test.skip();
//     }
//     console.log("This is my Test - 3, skip annotation with condition");
// });

// Fixme
// test("Test - 4", async ({page}) => {
//     test.fixme();
//     console.log("This is my Test - 4, fixme annotation");
// });

// fail
// test("Test - 5", async ({page}) => {
//     test.fail();    //expecting
//     console.log("This is my Test - 5, fail annotation");
//     //expect(1).toBe(1);
//     expect(1).toBe(10); // actual
//     // if both actual and expecting fails then only test passes
// });

// fail with condition
// test("Test - 6", async ({page, browserName}) => {
//     console.log("This is my Test - 5, fail annotation with condition");
//     if( browserName == 'chromium' ){//actual
//         test.fail();
//     }
    
// });

// slow
test("Test - 7", async ({page, browserName}) => {
    test.slow();
    console.log("This is my Test - 5, slow annotation");
    await page.goto("https://demoblaze.com/index.html");
});