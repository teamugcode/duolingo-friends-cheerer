require("dotenv").config();
const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

/**
 * Run this server on command line:
 * node duolingo-friends-cheerer.js
 *
 * Express app to run server
 * Address http://localhost:4000/cheer-friends?url=https://www.duolingo.com
 */
app.get("/cheer-friends", async function (req, res) {
    // Define variables
    const email = process?.env?.USER_EMAIL;
    const password = process?.env?.USER_PASSWORD;
    const profileName = process?.env?.DUOLINGO_PROFILENAME;

    // Debug if email and password is set
    if (email && password) {
        console.log("email and password set");
    } else {
        console.warn("email and password not set");
    }

    // Start browser
    console.log("starting browser");
    const browser = await puppeteer.launch();

    // Start new page
    const page = await browser.newPage();

    // Set custom viewport size for screenshot (and maybe for easier navigation)
    await page.setViewport({ width: 1920, height: 1250 });

    console.log("navigating to page");
    // Pass url param from client side ?url=https://www.duolingo.com
    await page.goto(req.query.url);

    // Wait for already have account button selector
    await page.waitForFunction(() => {
        const selectors = ['button[data-test="have-account"]'];
        return selectors.every(
            (selector) => document.querySelector(selector)?.clientHeight > 0
        );
    });

    // Add debug message if have account selector exists
    if ((await page.$('button[data-test="have-account"]')) !== null) {
        console.log("have account button selector found");
    } else {
        console.log("have account button selector not found");
    }

    // Focus and click have account button
    await page.focus('button[data-test="have-account"]');
    await page.click('button[data-test="have-account"]');

    // Add debug message if we reach until the click
    console.log("should have clicked");

    // Wait short time when the (react) page updates
    await page.waitForTimeout(1800);

    // Wait for the form input selectors
    await page.waitForFunction(() => {
        const selectors = [
            'input[data-test="email-input"]',
            'input[data-test="password-input"]',
            'button[data-test="register-button"]',
        ];
        return selectors.every(
            (selector) => document.querySelector(selector)?.clientHeight > 0
        );
    });

    // Debug if the form selectors exists
    console.log("form input fields found");

    // Focus and type email and password to the input fields
    await page.focus('input[data-test="email-input"]');
    await page.type('input[data-test="email-input"]', email);
    await page.focus('input[data-test="password-input"]');
    await page.type('input[data-test="password-input"]', password);

    // Debug if the form inputs are filled
    console.log("email and password set to the form inputs");

    // Focus and click login button
    await page.focus('button[data-test="register-button"]');
    await page.click('button[data-test="register-button"]');

    // Debug if login button is clicked
    console.log("login button clicked");

    // Wait for login
    await page.waitForNavigation({ waitUntil: "networkidle2" });

    // Add extra timeout make sure login page is loaded before continuing
    await page.waitForTimeout(2000);

    console.log("profileName", profileName);
    // Wait for profile link selector
    await page.waitForFunction(
        (profileName) => {
            if (!profileName) {
                console.warn("No profileName set !");
            }
            const selectors = [`a[href="/profile/${profileName}"]`];
            return selectors.every(
                (selector) => document.querySelector(selector)?.clientHeight > 0
            );
        },
        {},
        profileName
    );

    // Debug if profile link found
    if ((await page.$(`a[href="/profile/${profileName}"]`)) !== null) {
        console.log("found a href");
    } else {
        console.log("not found a href");
    }

    // Focus and click profile link
    await page.focus(`a[href="/profile/${profileName}"]`);
    await page.click(`a[href="/profile/${profileName}"]`);

    // Add extra timeout to wait profile page loading (needs time because it has a lot of data)
    await page.waitForTimeout(3500);

    // Debug if profile page is reached
    console.log("arrived to profile page");

    // Wait for friend updates link selector
    await page.waitForFunction(() => {
        const selectors = [`a[href="/friend-updates"]`];
        return selectors.every(
            (selector) => document.querySelector(selector)?.clientHeight > 0
        );
    });

    // Debug if friend updates link found
    if ((await page.$(`a[href="/friend-updates"]`)) !== null) {
        console.log("found a href friend-updates");
    } else {
        console.log("not found a href friend-updates");
    }

    // Focus and click friend updates link
    await page.focus(`a[href="/friend-updates"]`);
    await page.click(`a[href="/friend-updates"]`);

    // Add extra timeout to wait profile page loading (needs time because it has a lot of data)
    await page.waitForTimeout(2000);

    // Debug if friend updates page is reached
    console.log("arrived to friend updates page");

    // Wait for cheer button selectors (all and not clicked yet)
    await page.waitForFunction(() => {
        const selectors = [`button._23mZA:not(.t1Hcp)`, "button._23mZA"];
        return selectors.every(
            (selector) => document.querySelector(selector)?.clientHeight > 0
        );
    });

    // Debug if cheer button selectors link found
    if ((await page.$("button._23mZA:not(.t1Hcp)")) !== null) {
        console.log("found a href friend-updates");
    } else {
        console.log("not found a href friend-updates");
    }

    // Get count of cheer buttons
    let cheerButtonsNotClickedCount = await page.$$eval(
        "button._23mZA:not(.t1Hcp)",
        (buttons) => buttons?.length ?? 0
    );
    const cheerButtonsTotalCount = await page.$$eval(
        "button._23mZA",
        (buttons) => buttons.length
    );

    // Debug button amounts (total and not clicked)
    console.log("cheerButtonsNotClickedCount: ", cheerButtonsNotClickedCount);
    console.log("cheerButtonsTotalCount: ", cheerButtonsTotalCount);

    // Get all friend update items
    const friendUpdateItems = await page.$$("._2vsBg");

    // Loop, focus and click cheer buttons
    if (cheerButtonsNotClickedCount > 0 && friendUpdateItems.length > 0) {
        console.log("looping and clicking cheer buttons");
        for (let i = 0; i < friendUpdateItems.length; i++) {
            const button = await friendUpdateItems[i].$(
                "button._23mZA:not(.t1Hcp)"
            );

            // Click and focus if button found
            if (button) {
                console.log("focusing and clicking button");
                await button.focus();
                await button.click();
            }
        }
    }

    // Start capturing a screenshot
    console.log("starting to capture a screenshot");
    const screenshotBuffer = await page.screenshot();

    // Respond with image
    res.writeHead(200, {
        "Content-Type": "image/png",
        "Content-Length": screenshotBuffer.length,
    });

    // End responce process
    res.end(screenshotBuffer);

    console.log("closing browser");
    // Close browser
    await browser.close();
});

app.listen(4000);
