const { expect } = require('@playwright/test');
const { WebActions } = require('./WebActions.js');

/**
 * BasePage is the foundation for all page objects.
 * It provides common, page-level logic and assertions.
 */
class BasePage extends WebActions {
    constructor(page) {
        super(page);
    }

    async navigateTo(url) {
        console.log(`[NAVIGATE] To: ${url}`);
        await this.page.goto(url, { waitUntil: 'load', timeout: 30000 });
        await this.waitForNetworkIdle();
    }

    async waitForNetworkIdle() {
        console.log(`[WAIT] For network idle`);
        await this.page.waitForLoadState('networkidle');
    }

    async verifyVisible(locator, name = "Element") {
        console.log(`[VERIFY] ${name} is visible`);
        await expect(locator).toBeVisible({ timeout: 15000 });
    }

    async verifyContainsText(locator, text, name = "Element") {
        console.log(`[VERIFY] ${name} contains text: ${text}`);
        await expect(locator).toContainText(text);
    }

    async getElementText(locator) {
        await locator.waitFor({ state: 'visible' });
        return (await locator.innerText()).trim();
    }

    async getScreenshot(fileName) {
        console.log(`[CAPTURE] Screenshot: ${fileName}`);
        await this.page.screenshot({ path: `screenshots/${fileName}.png`, fullPage: true });
    }
}

module.exports = { BasePage };
