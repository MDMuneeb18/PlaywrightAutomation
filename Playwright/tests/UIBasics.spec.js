// actual tests go here (in .spec file)
// first we need to import 1 module that is present in node_modules
const {test} = require("@playwright/test");

// here when we want to use test it takes  2 arguments title(actual test case name) 
// and test function(we write actual automation code)
test("First Playwright Test", async function(){
    //playwright code
    //example
    //step - 1 : open browser
    //step - 2 : enter username and password (let say 2 seconds to load page)
    // JS won't wait for 2 sec; instead it will move to next step which will fail our tests
    // so we need to explicitly tell JS to wait for certain amount of time. 
    // So before every step we need to write await keyword. It knows that it need to wait until browser opens
    //step -3 : click loginn button

    //whenever we write await keyword in a function it is asynchronous. 
    // So we need to represent it with async keyword. If we miss this keyword then no use of await keyword

    // await activation - async writing infront of function
     
});
// the above is treated as completely 1 test case

test("First Playwright Test", async ({browser}) => {
    
})