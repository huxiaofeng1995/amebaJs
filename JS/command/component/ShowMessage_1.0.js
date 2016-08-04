define(["require", "exports"], function (require, exports) {
    "use strict";
    function metadata() {
        return {
            name: "ShowMessage",
            description: "显示信息",
            version: "1.0",
            inArgs: [
                "type",
                "content"
            ],
        };
    }
    exports.metadata = metadata;
    ;
    function execute(inArgs, resultCallback) {
        var type, content, end;
        type = inArgs.get("type");
        content = inArgs.get("content");
        if (type === "info") {
            console.log(content);
        }
        end = "success";
        resultCallback({
            end: end
        });
    }
    exports.execute = execute;
});
//# sourceMappingURL=ShowMessage_1.0.js.map