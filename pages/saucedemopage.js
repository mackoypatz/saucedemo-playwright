export class saucedemoPage {
    constructor(page) {
        this.page = page;

        // --- Login ---
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');

        // --- Add and Remove items from inventory ---
        this.addinventory1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addinventory2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addinventory3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.addinventory4 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.removeinventory1 = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.removeinventory2 = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.removeinventory3 = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.removeinventory4 = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');

        // --- Add and Remove items from cart ---
        this.addcart1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addcart2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addcart3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.addcart4 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.shoppingcart = page.locator('[data-test="shopping-cart-link"]');
        this.removecart1 = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.removecart2 = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.removecart3 = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.removecart4 = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.continueshopping = page.locator('[data-test="continue-shopping"]');

        // --- Add and Checkout from cart ---
        this.addcheckout1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addcheckout2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.shoppingcartlink = page.locator('[data-test="shopping-cart-link"]');
        this.checkoutbutton = page.locator('[data-test="checkout"]');
        this.firstname_input = page.locator('[data-test="firstName"]');
        this.lastname_input = page.locator('[data-test="lastName"]');
        this.postalcode_input = page.locator('[data-test="postalCode"]');
        this.continue_button = page.locator('[data-test="continue"]');
        this.finish_button = page.locator('[data-test="finish"]');
        this.back_to_products_button = page.locator('[data-test="back-to-products"]');

        // --- Logout ---
        this.openmenu = page.getByRole('button', { name: 'Open Menu' });
        this.sidemenulogout = page.locator('[data-test="logout-sidebar-link"]');
    }

    // --- Methods ---
    async gotothiswebsite() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    // Inventory workflow
    async addInventory() {
        await this.addinventory1.click();
        await this.addinventory2.click();
        await this.addinventory3.click();
        await this.addinventory4.click();
    }

    async removeInventory() {
        await this.removeinventory1.click();
        await this.removeinventory2.click();
        await this.removeinventory3.click();
        await this.removeinventory4.click();
    }

    // Cart workflow
    async addCart() {
        await this.addcart1.click();
        await this.addcart2.click();
        await this.addcart3.click();
        await this.addcart4.click();
    }

    async removeCart() {
    // Go to cart first ✅
    await this.shoppingcart.click();

    await this.removecart1.click();
    await this.removecart2.click();
    await this.removecart3.click();
    await this.removecart4.click();

    // Wait for button to be visible before clicking ✅
    await this.continueshopping.waitFor({ state: 'visible', timeout: 10000 });
    await this.continueshopping.click();
}


    // async removeCart() {
    //     await this.removecart1.click();
    //     await this.removecart2.click();
    //     await this.removecart3.click();
    //     await this.removecart4.click();
    //     await this.continueshopping.click();
    // }

    // Checkout workflow
    async addAndCheckout(firstName, lastName, postalCode) {
        // Add items
        await this.addcheckout1.click();
        await this.addcheckout2.click();
        // Go to cart and checkout
        await this.shoppingcartlink.click();
        await this.checkoutbutton.click();
        // Fill checkout info
        await this.firstname_input.fill(firstName);
        await this.lastname_input.fill(lastName);
        await this.postalcode_input.fill(postalCode);
        await this.continue_button.click();
        // Finish checkout
        await expect(this.finish_button).toBeVisible({ timeout: 10000 });
        await this.finish_button.click();
        await expect(this.back_to_products_button).toBeVisible({ timeout: 10000 });
        await this.back_to_products_button.click();
    }

    // Logout
    async logout() {
        await this.openmenu.click();
        await this.sidemenulogout.click();
    }
}
