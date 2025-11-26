import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();


});

test('add and remove items from inventory', async ({ page }) => {
    console.log('Add/Remove Inventory list...');
    // Add items
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    // Remove items
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();

});

test('add and remove items from the cart', async ({ page }) => {
    console.log('Add/Remove Cart list...');
    // Add items
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Remove items
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="continue-shopping"]').click();
});

test('add and checkout from cart', async ({ page }) => {
  console.log('Add and checkout...');
  // Add items
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  // Go to cart and checkout
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  // Fill checkout info
  await page.locator('[data-test="firstName"]').fill('Mark Lowell');
  await page.locator('[data-test="lastName"]').fill('Paterno');
  await page.locator('[data-test="postalCode"]').fill('9200');
  await page.locator('[data-test="continue"]').click();
  // Wait for finish button before clicking
  const finishButton = page.locator('[data-test="finish"]');
  await expect(finishButton).toBeVisible({ timeout: 10000 });
  await finishButton.click();
  // Wait for back-to-products button before clicking
  const backButton = page.locator('[data-test="back-to-products"]');
  await expect(backButton).toBeVisible({ timeout: 10000 });
  await backButton.click();
  console.log('Checkout completed!');

});

test('Logoout', async ({ page }) => {
   console.log('Logout..');
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});



