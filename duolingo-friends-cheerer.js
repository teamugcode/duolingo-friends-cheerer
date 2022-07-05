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
    console.log("starting browser");
    // Start browser
    const browser = await puppeteer.launch();

    // Start new page
    const page = await browser.newPage();

    // Set custom viewport size for screenshot (and maybe for easier navigation)
    await page.setViewport({ width: 1920, height: 1250 });

    console.log("navigating to page");
    // Pass url param from client side ?url=https://www.duolingo.com
    await page.goto(req.query.url);

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
