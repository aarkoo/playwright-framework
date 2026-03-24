/**
 * WebActions class provides low-level Playwright wrappers.
 * This can be used for scroll, mouse, and keyboard interactions.
 */
class WebActions {
    constructor(page) {
        this.page = page;
    }

    async click(locator, name = "element") {
        console.log(`[ACTION] Click: ${name}`);
        await locator.waitFor({ state: 'visible', timeout: 15000 });
        await locator.click();
    }

    async type(locator, text, name = "field") {
        console.log(`[ACTION] Type into ${name}: ${text}`);
        await locator.waitFor({ state: 'visible', timeout: 15000 });
        await locator.clear();
        await locator.fill(text);
    }

    async hover(locator, name = "element") {
        console.log(`[ACTION] Hover: ${name}`);
        await locator.waitFor({ state: 'visible' });
        await locator.hover();
    }

    async scrollIntoView(locator) {
        console.log(`[ACTION] Scroll into view`);
        await locator.scrollIntoViewIfNeeded();
    }

    async scrollBy(x, y) {
        console.log(`[ACTION] Scroll by: ${x}, ${y}`);
        await this.page.evaluate(({ x, y }) => window.scrollBy(x, y), { x, y });
    }

    async mouseClickXY(x, y) {
        console.log(`[ACTION] Mouse click at: ${x}, ${y}`);
        await this.page.mouse.click(x, y);
    }

    async mouseMove(x, y) {
        console.log(`[ACTION] Mouse move to: ${x}, ${y}`);
        await this.page.mouse.move(x, y);
    }

    async wait(ms) {
        console.log(`[WAIT] Sleeping for ${ms}ms`);
        await this.page.waitForTimeout(ms);
    }
}

module.exports = { WebActions };
