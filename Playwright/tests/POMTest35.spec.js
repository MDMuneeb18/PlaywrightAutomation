import {test, expect} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";// here .. represents current project
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";

test("POM Session - 1", async ({page}) => {
    //Login
    const loginPageObject = new LoginPage(page);
    await loginPageObject.goToLoginPage();
    await loginPageObject.login("MohammadMuneeb", "Faceoff");
    await page.waitForTimeout(3000);
 
    // HomePage
    const homePageObject = new HomePage(page, "Nexus 6");
    await homePageObject.addProductToCart("Nexus 6");
    await homePageObject.goToCart();

    // Cart
    const cartPageObject = new CartPage(page, "Nexus 6");
    await cartPageObject.checkProductInCart();
});