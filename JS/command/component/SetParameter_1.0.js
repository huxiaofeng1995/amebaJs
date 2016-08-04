define(["require", "exports"], function (require, exports) {
    "use strict";
    function metadata() {
        return {
            name: "SetParameter",
            description: "设置参数",
            version: "1.0",
            inArgs: [],
            outArgs: [
                "result"
            ]
        };
    }
    exports.metadata = metadata;
    ;
    function execute(inArgs, resultCallback) {
        var end, result;
        end = "success";
        result = "";
        resultCallback({
            end: end,
            outArgs: {
                "result": result
            }
        });
    }
    exports.execute = execute;
    ;
});
//# sourceMappingURL=SetParameter_1.0.js.map