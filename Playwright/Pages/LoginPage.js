// whenever we create a Page Object Class we need to need to create a class in below format
// we have to  make this class available to access to other classes or other tests. 
// So for this only we should use exports.className. Other wise we can't use them in other classes
exports.LoginPage = class LoginPage{
    //in class we need to create a constructor
    constructor(page){
        // write parameter for constructor as page. This will be taken from the test
        // this page fixture will be used to locate elements
        
        //in constructor we need to write all the locators
        // here this keyword always represents the class 
        this.page = page;
        this.loginLink = "#login2";
        this.userName = "#loginusername";
        this.password = "#loginpassword";
        this.loginBtn = "(//button[@class='btn btn-primary'])[3]";
    }

    async goToLoginPage(){
        await this.page.goto("https://demoblaze.com/index.html");
    }

    async login(username1, password1){
        await this.page.locator(this.loginLink).click();
        await this.page.fill(this.userName, username1);
        await this.page.fill(this.password, password1);
        await this.page.click(this.loginBtn);
    }
}