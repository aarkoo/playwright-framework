const { BasePage } = require('../utils/BasePage.js');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.productTitle = page.locator(".card-body b");
        this.productCards = page.locator(".card-body");
        this.cartButton = page.locator("button[routerlink*='cart']"); // Better locator for the cart link
    }

    async addProductToCart(productName) {
        console.log(`[ACTION] Add product: ${productName}`);
        const count = await this.productCards.count();
        
        for (let i = 0; i < count; i++) {
            const card = this.productCards.nth(i);
            const title = await card.locator("b").textContent();

            if (title.trim() === productName) {
                const addBtn = card.locator("button:has-text('Add to Cart')");
                await this.scrollIntoView(addBtn);
                await this.click(addBtn, "Add to Cart button");
                break;
            }
        }
        await this.click(this.cartButton, "Cart button");
        // Wait for cart route or short timeout instead of networkidle which can hang
        await this.wait(2500);
    }
}

module.exports = { HomePage };
