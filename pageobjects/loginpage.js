const { BasePage } = require('../utils/BasePage.js');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.signinbutton = page.locator('#login');
        this.usernameField = page.getByPlaceholder('email@example.com');
        this.passwordField = page.getByPlaceholder('enter your passsword');
    }

    async goto() {
        await this.navigateTo("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async validLogin(username, password) {
        console.log(`[LOGIN] with user: ${username}`);
        await this.type(this.usernameField, username, "Username field");
        await this.type(this.passwordField, password, "Password field");
        await this.click(this.signinbutton, "Sign In button");
        // Wait for dashboard to fully load, avoiding networkidle which can hang on this site
        await this.wait(4000);
    }
}

module.exports = { LoginPage };
