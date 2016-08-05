// import * as ShowMessage from "./component/ShowMessage_1.0";
// import * as ControllerCallMethod from "./component/ControllerCallMethod_1.0";
// import * as StringJoint from "./component/StringJoint_1.0";
// import * as SetParameter from "./component/SetParameter_1.0";
define(["require", "exports", "../runtime/Context", "../runtime/EventHub", "../const/EngineEvent"], function (require, exports, Context_1, EventHub_1, EngineEvent_1) {
    "use strict";
    function call(componentElement, callback) {
        var name, inArg;
        name = componentElement.getName();
        inArg = componentElement.getInArgMap();
        var data = {
            param: inArg,
            callback: callback,
            context: Context_1.Context.baseContext
        };
        EventHub_1.EventHub.publish(EngineEvent_1.EngineEvent.ENGINE_EVENT + name, data);
        // if(name === "ShowMessage") {
        //     ShowMessage.execute(inArg, function(result) {
        //         callback(result);
        //     });
        // } else if(name === "ControllerCallMethod") {
        //     ControllerCallMethod.execute(inArg, function(result) {
        //         callback(result);
        //     });
        // } else if(name === "StringJoint") {
        //     StringJoint.execute(inArg, function(result) {
        //         callback(result);
        //     });
        // } else if(name === "SetParameter") {
        //     SetParameter.execute(inArg, function(result) {
        //         callback(result);
        //     })
        // }
        // let callback = function () {
        //     alert("callback");
        // }
    }
    exports.call = call;
    ;
});
//# sourceMappingURL=Command.js.map