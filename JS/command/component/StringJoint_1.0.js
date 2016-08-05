define(["require", "exports"], function (require, exports) {
    "use strict";
    function metadata() {
        return {
            name: "StringJoint",
            description: "实现字符串的常用操作：拼接",
            version: "1.0",
            inArgs: [
                "strList",
                "joint"
            ],
            outArgs: [
                "result"
            ]
        };
    }
    exports.metadata = metadata;
    ;
    function execute(inArgs, resultCallback) {
        var strList, strArr, joint, end, result;
        strList = inArgs.get("strList").getContent();
        joint = inArgs.get("joint").getContent();
        strArr = JSON.parse(strList);
        result = strArr.join(joint);
        end = "success";
        result = result;
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
//# sourceMappingURL=StringJoint_1.0.js.map