const base = require('@playwright/test');
const { LoginPage } = require('../pageobjects/loginpage.js');
const { HomePage } = require('../pageobjects/homepage.js');

// Extend the test with page objects as fixtures
const test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
});

module.exports = {
    test,
    expect: base.expect
};
