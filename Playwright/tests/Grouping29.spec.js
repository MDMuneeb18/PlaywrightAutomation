import {test, expect} from "@playwright/test";

test.beforeAll( () => {
    console.log("THIS IS \"beforeAll\" hook");
});

test.afterAll( () => {
    console.log("THIS IS \"afterAll\" hook");
});

test.beforeEach( () => {
    console.log("THIS IS \"beforeEach\" hook");
});

test.afterEach( () => {
    console.log("THIS IS \"afterEach\" hook");
});

/*
    test.describe("Group Name", asynchronous Function)
*/
test.describe("Group - 1", () => {      
    test("Test - 1", () => {
        console.log("This is Test - 1");
    });

    test("Test - 2", () => {
        console.log("This is Test - 2");
    });
});

test.describe.only("Group - 2", () => {
    test("Test - 3", () => {
        console.log("This is Test - 3");
    });

    test("Test - 4", () => {
        console.log("This is Test - 4");
    });
});