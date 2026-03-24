const { test, expect } = require('../utils/fixtures.js');
const dataset = require('../utils/testdata.json');

dataset.forEach((data, index) => {
    test(`Search and add product for: ${data.username} (Iteration ${index + 1})`, async ({ loginPage, homePage }) => {
        const productName = "ZARA COAT 3";

        await loginPage.goto();
        await loginPage.validLogin(data.username, data.password);
        
        await homePage.addProductToCart(productName);

        // Professional assertion from custom helper
        await homePage.verifyVisible(homePage.cartButton, "Cart button");
    });
});
