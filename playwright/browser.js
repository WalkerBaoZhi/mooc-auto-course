const { chromium } = require('playwright');

let browser;
let page;

async function initBrowser() {
    if (!browser) {
        browser = await chromium.launch({
            channel: 'msedge',
            headless: false
        });
        const context = await browser.newContext();
        page = await context.newPage();
    }
    return page;
}

async function screenshot() {
    await initBrowser();
    return await page.screenshot({ type: 'png' });
}

async function clickAt(x, y) {
    await initBrowser();
    await page.mouse.click(x, y);
}

async function typeAt(selector, text) {
    await initBrowser();
    await page.fill(selector, text);
}

async function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

module.exports = {
    initBrowser,
    screenshot,
    clickAt,
    typeAt,
    wait
};
