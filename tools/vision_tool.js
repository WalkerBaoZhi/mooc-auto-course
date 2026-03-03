const browser = require('../playwright/browser');

module.exports = {
    name: "vision_tool",
    description: "识别题目、选项、题型",
    parameters: { type: "object", properties: {}, required: [] },
    async run() {

        const img = await browser.screenshot();
        const base64 = img.toString('base64');

        return {
            prompt: `
识别中国大学MOOC题目，返回 JSON：
{
  "type": "single | multi | judge | blank | oj",
  "question": "...",
  "options": [
    {"text": "...", "bbox": [x1, y1, x2, y2]}
  ],
  "inputs": [
    {"bbox": [x1, y1, x2, y2]}
  ],
  "next_button": {"bbox": [...]},
  "back_button": {"bbox": [...]}
}
`,
            image: base64
        };
    }
};
