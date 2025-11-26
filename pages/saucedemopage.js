export class saucedemoPage {
    constructor(page) {
        this.page = page;

        // login
        this.username_textbox = page.locator('[data-test="username"]');
        this.password_textbox = page.locator('[data-test="password"]');
        this.login_button = page.locator('[data-test="login-button"]');

                      // Add and Remove items from inventory

    //add items
       this.addinventory1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
       this.addinventory2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
       this.addinventory3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
       this.addinventory4 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    //remove items
       this.removeinventory1 = page.locator('[data-test="remove-sauce-labs-backpack"]');
       this.removeinventory2 = page.locator('[data-test="remove-sauce-labs-bike-light"]');
       this.removeinventory3 = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
       this.removeinventory4 = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');

                          // Add and remove items from the cart

    //add items
       this.addcart1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
       this.addcart2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
       this.addcart3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
       this.addcart4 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
       this.shoppingcart = page.locator('[data-test="shopping-cart-link"]');


        // logout (prefer locator instead of getByRole for stability)
        this.openmenu = page.getByRole('button', { name: 'Open Menu' });
        this.sidemenulogout = page.locator('[data-test="logout-sidebar-link"]');
    }

    async gotothiswebsite() {
        await this.page.goto('https://www.saucedemo.com/');
        
    }

    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

    async addcart() {
        await this.addcart1.click();
        await this.addcart2.click();
    }

    async logout() {
        await this.openmenu.click();
        await this.sidemenulogout.click();
    }
}
