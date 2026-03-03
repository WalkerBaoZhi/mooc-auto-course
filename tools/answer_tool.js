const browser = require('../playwright/browser');

module.exports = {
    name: "answer_tool",
    description: "根据题型自动答题",
    parameters: {
        type: "object",
        properties: { data: { type: "object" } },
        required: ["data"]
    },
    async run({ data }) {

        if (data.type === "single" || data.type === "judge") {
            const opt = data.options[0];
            const [x1, y1, x2, y2] = opt.bbox;
            await browser.clickAt((x1 + x2) / 2, (y1 + y2) / 2);
        }

        if (data.type === "multi") {
            for (const opt of data.options) {
                const [x1, y1, x2, y2] = opt.bbox;
                await browser.clickAt((x1 + x2) / 2, (y1 + y2) / 2);
                await browser.wait(300);
            }
        }

        if (data.type === "blank") {
            for (const input of data.inputs) {
                const [x1, y1, x2, y2] = input.bbox;
                await browser.clickAt((x1 + x2) / 2, (y1 + y2) / 2);
                await browser.typeAt("input", "不知道");
            }
        }

        return { answered: true };
    }
};
