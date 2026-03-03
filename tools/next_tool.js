const browser = require('../playwright/browser');

module.exports = {
    name: "next_tool",
    description: "下一题 / 提交 / 返回列表",
    parameters: {
        type: "object",
        properties: { bbox: { type: "array" } },
        required: ["bbox"]
    },
    async run({ bbox }) {
        const [x1, y1, x2, y2] = bbox;
        await browser.clickAt((x1 + x2) / 2, (y1 + y2) / 2);
        await browser.wait(1500);
        return { next: true };
    }
};
