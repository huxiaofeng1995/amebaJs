import {LogicletComponentElement} from "../lfc/define/LogicletComponentElement";

import * as ShowMessage from "./component/ShowMessage_1.0";
import * as ControllerCallMethod from "./component/ControllerCallMethod_1.0";
import * as StringJoint from "./component/StringJoint_1.0";
import * as SetParameter from "./component/SetParameter_1.0";

 export function call(componentElement: LogicletComponentElement, callback: Function) {
    var name, inArg;
    
    name = componentElement.getName();
    inArg = componentElement.getInArgMap();
    
    if(name === "ShowMessage") {
        ShowMessage.execute(inArg, function(result) {
            callback(result);
        });
    } else if(name === "ControllerCallMethod") {
        ControllerCallMethod.execute(inArg, function(result) {
            callback(result);
        });
    } else if(name === "StringJoint") {
        StringJoint.execute(inArg, function(result) {
            callback(result);
        });
    } else if(name === "SetParameter") {
        SetParameter.execute(inArg, function(result) {
            callback(result);
        })
    }
};