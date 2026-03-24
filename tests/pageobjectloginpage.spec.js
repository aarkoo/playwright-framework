const { test, expect } = require('../utils/fixtures.js');
const dataset = require('../utils/testdata.json');

dataset.forEach((data, index) => {
    test(`login with user: ${data.username} (Iteration ${index + 1})`, async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.validLogin(data.username, data.password);
    });
});