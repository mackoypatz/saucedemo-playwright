# saucedemo-playwright

SauceDemo Playwright Automation – Test Suite Overview

This project contains automated UI tests for the SauceDemo website using Playwright and the Page Object Model (POM).
The goal is to demonstrate a clean testing approach, clear prioritisation, and maintainable automation design.

Test Strategy – What I Chose to Test and Why

SauceDemo is a simple e-commerce application. Instead of automating everything, I focused on the most business-critical flows and actions that reflect real user behaviour. My automation covers:

1. Login

This is the entry point to all other functionality.
If login is broken, no user can access product or checkout pages.
The test ensures that a valid user can authenticate and reach the inventory page.

2. Inventory Interaction (Add & Remove Items)

Adding and removing products is core functionality for any online store.
The test validates that:

Items can be added to the cart

Items can be removed

Action buttons respond correctly

This helps detect UI, state, or button-rendering issues early.

3. Cart Workflow (Adding Items & Removing Items in Cart)

The cart represents the transition between browsing and purchasing.
The test confirms:

Items successfully appear in the cart

Items can be removed directly inside the cart

Continue Shopping works as expected

This validates stability of user navigation and cart state management.

4. Checkout Workflow (End-to-End Purchase Flow)

This is the most critical flow for any e-commerce site.
The test includes:

Adding items

Navigating through checkout

Filling required data

Completing the purchase

It ensures that the main revenue-generating path works and is resilient.

5. Logout

Logout maintains proper session handling and ensures users don't remain authenticated unexpectedly.
