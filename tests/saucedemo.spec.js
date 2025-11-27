import { test, expect } from '@playwright/test';
import { saucedemoPage } from '../pages/saucedemopage';

test.beforeEach(async ({ page }) => {

    const sauceDemo = new saucedemoPage(page);
    console.log('Login...');
    await sauceDemo.gotothiswebsite();
    await sauceDemo.login('standard_user', 'secret_sauce');

});

test('add and remove items from inventory', async ({ page }) => {
    console.log('Add/Remove Inventory list...');
    const sauceDemo = new saucedemoPage(page);
    console.log('Add/Remove Inventory list...');
    await sauceDemo.addInventory();
    await sauceDemo.removeInventory();
});

test('add and remove items from the cart', async ({ page }) => {
    console.log('Add/Remove Cart list...');
    const sauceDemo = new saucedemoPage(page);
    console.log('Add/Remove Cart list...');
    await sauceDemo.addCart();
    await sauceDemo.removeCart();   
});

test('add and checkout from cart', async ({ page }) => {
    console.log('Add and checkout...');
    const sauceDemo = new saucedemoPage(page);
    console.log('Add and checkout...');
    await sauceDemo.addAndCheckout('Mark Lowell', 'Paterno', '9200');
 
});

test('Logoout', async ({ page }) => {
    console.log('Logout..');
    const sauceDemo = new saucedemoPage(page);
    console.log('Logout...');
    await sauceDemo.logout();
    
});



