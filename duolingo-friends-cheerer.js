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
    await page.waitForTimeout(1000);

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

    console.log("starting to capture a screenshot");
    // Start capturing a screenshot
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
