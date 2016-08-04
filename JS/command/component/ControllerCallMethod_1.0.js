define(["require", "exports"], function (require, exports) {
    "use strict";
    function metadata() {
        return {
            name: "ControllerCallMethod",
            description: "控件方法获得返回",
            version: "1.0",
            inArgs: [
                "controllerId",
                "controllerClass",
                "methodName",
                "methodArgs"
            ],
            outArgs: [
                "result"
            ]
        };
    }
    exports.metadata = metadata;
    ;
    function execute(inArgs, resultCallback) {
        var controllerId, controllerClass, methodName, methodArgs, end, result;
        controllerId = inArgs.controllerId;
        controllerClass = inArgs.controllerClass;
        methodName = inArgs.methodName;
        methodArgs = inArgs.methodArgs;
        end = "success";
        result = methodArgs;
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
//# sourceMappingURL=ControllerCallMethod_1.0.js.map