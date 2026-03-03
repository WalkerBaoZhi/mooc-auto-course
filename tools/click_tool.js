const browser = require('../playwright/browser');

module.exports = {
    name: "click_tool",
    description: "点击选项",
    parameters: {
        type: "object",
        properties: { bbox: { type: "array" } },
        required: ["bbox"]
    },
    async run({ bbox }) {
        const [x1, y1, x2, y2] = bbox;
        await browser.clickAt((x1 + x2) / 2, (y1 + y2) / 2);
        return { clicked: true };
    }
};
