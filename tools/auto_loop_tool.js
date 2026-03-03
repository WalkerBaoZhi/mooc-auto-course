module.exports = {
    name: "auto_loop_tool",
    description: "全自动完成所有测验",
    parameters: { type: "object", properties: {}, required: [] },

    async run() {

        while (true) {

            const list = await this.callTool("detect_list_tool", {});
            if (!list.buttons || list.buttons.length === 0)
                return { done: true };

            await this.callTool("enter_test_tool", { bbox: list.buttons[0].bbox });

            while (true) {
                const data = await this.callTool("vision_tool", {});
                await this.callTool("answer_tool", { data });

                const next = await this.callTool("vision_tool", {});
                if (!next.next_button)
                    break;

                await this.callTool("next_tool", { bbox: next.next_button.bbox });
            }

            const back = await this.callTool("vision_tool", {});
            await this.callTool("next_tool", { bbox: back.back_button.bbox });
        }
    }
};
