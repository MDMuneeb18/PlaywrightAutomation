const { expect } = require("@playwright/test");

exports.HomePage = 
class HomePage{

    constructor(page, name){
        this.page = page;
        this.products = "//a[@class=\"hrefch\"]";
        this.cartBtn = "//*[text() = \"Add to cart\"]";
        this.cartTab = "//a[text() = \"Cart\"]";
        
    }
    async addProductToCart(productName){
        const productList = await this.page.$$(this.products);
        for(let productt of productList){
            if( await productt.textContent() == productName ){
                await productt.click();
                await this.page.locator(this.cartBtn).click();
                break;
            }
        }
        await this.page.on("dialog", async dialogReciever => {
            await expect(dialogReciever.type()).toContain("alert");
            await dialogReciever.accept();
        });
    }
    async goToCart(){
        await this.page.locator(this.cartTab).click();
        // await this.page.waitForTimeout(3000);
        // const count1 = await this.page.locator(this.productNamee).count()
        // await expect(count1).toBeGreaterThan(0);
    }

}