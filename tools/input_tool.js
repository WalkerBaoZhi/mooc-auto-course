const browser = require('../playwright/browser');

module.exports = {
    name: "input_tool",
    description: "填空题输入",
    parameters: {
        type: "object",
        properties: {
            selector: { type: "string" },
            text: { type: "string" }
        },
        required: ["selector", "text"]
    },
    async run({ selector, text }) {
        await browser.typeAt(selector, text);
        return { filled: true };
    }
};
