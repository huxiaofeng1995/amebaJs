define(["require", "exports", "./component/ShowMessage_1.0", "./component/ControllerCallMethod_1.0", "./component/StringJoint_1.0", "./component/SetParameter_1.0"], function (require, exports, ShowMessage, ControllerCallMethod, StringJoint, SetParameter) {
    "use strict";
    function call(componentElement, callback) {
        var name, inArg;
        name = componentElement.getName();
        inArg = componentElement.getInArgMap();
        if (name === "ShowMessage") {
            ShowMessage.execute(inArg, function (result) {
                callback(result);
            });
        }
        else if (name === "ControllerCallMethod") {
            ControllerCallMethod.execute(inArg, function (result) {
                callback(result);
            });
        }
        else if (name === "StringJoint") {
            StringJoint.execute(inArg, function (result) {
                callback(result);
            });
        }
        else if (name === "SetParameter") {
            SetParameter.execute(inArg, function (result) {
                callback(result);
            });
        }
    }
    exports.call = call;
    ;
});
//# sourceMappingURL=Command.js.map