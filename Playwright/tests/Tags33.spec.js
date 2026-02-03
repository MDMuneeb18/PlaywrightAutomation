import {test, expect} from "@playwright/test";

test("Test - 1@Sanity", async ({page}) => {
    console.log("This is my Test - 1");
});

test("Test - 2@Regression", async ({page}) => {
    console.log("This is my Test - 2");
});

test("Test - 3@Sanity", async ({page}) => {
    console.log("This is my Test - 3");
});

test("Test - 4@Regression", async ({page}) => {
    console.log("This is my Test - 4");
});

test("Test - 5@Regression@Sanity", async ({page}) => {
    console.log("This is my Test - 5");
});