const { expect } = require("@playwright/test");

exports.CartPage = 
class CartPage{
    constructor(page, productName){
        this.page = page;
        this.productNamee = `//*[text() = \"${productName}\"]`;
    }
    
    async checkProductInCart(){
        await this.page.waitForTimeout(3000);
        const product = await this.page.locator(this.productNamee).count();
        await expect(product).toBeGreaterThan(0);
    }
}