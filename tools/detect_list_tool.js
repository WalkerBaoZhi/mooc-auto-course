const browser = require('../playwright/browser');

module.exports = {
    name: "detect_list_tool",
    description: "识别测验列表中的“前往测验”按钮",
    parameters: { type: "object", properties: {}, required: [] },
    async run() {

        const img = await browser.screenshot();
        const base64 = img.toString('base64');

        return {
            prompt: `
识别所有“前往测验”按钮，返回 JSON：
{
  "buttons": [
    {"bbox": [x1, y1, x2, y2]}
  ]
}
`,
            image: base64
        };
    }
};
