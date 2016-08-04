/**
 * Created by Oliver on 2016-08-04 0004.
 */
/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/pubsub.d.ts" />
import {IPanelCompositeFactory} from "./IPanelCompositeFactory";
import {Context} from "../runtime/Context";
import GUID from "../lib/GUID";
import {HashMap} from "../lib/HashMap";
import {EngineEventManager} from "./EngineEventManager";
import {CommandHandlerExecutor} from "./CommandHandlerExecutor";
import {Tad} from "./Tad";
import {EventHub} from "../runtime/EventHub";

class DefaultPanelFactory implements IPanelCompositeFactory {
    getPanelComposite():any {
        return $("BODY");
    }
}

export class DeskTop {

    private sessionCtx:Context;
    private panelCompositeFactoryRegistry:HashMap = new HashMap();
    public static PANEL_FACTORY_DEFAULT = "";
    public static PANEL_FACTORY_WINDOW = "window";
    // private static CONTEXT_PREFIX =""
    public getContext():Context {
        return this.sessionCtx;
    }

    public init(tadPath:string) {

        // 0.创建Context
        this.sessionCtx = Context.baseContext.createChild("Desktop_"+GUID());
        //  0.创建面板工厂
        var defaultPanelFactory:IPanelCompositeFactory = new DefaultPanelFactory();
        this.panelCompositeFactoryRegistry.put(DeskTop.PANEL_FACTORY_DEFAULT,defaultPanelFactory);
        // 0.注册事件模块
        let commandExecutor = new CommandHandlerExecutor();
        this.getContext().set("CommandHandlerExecutor",commandExecutor);
        EngineEventManager.init(commandExecutor.handleEvent);
        // 1.启动tad
        let id:string = "Tad_"+GUID();
        let defaultTad = new Tad(id);
        defaultTad.start();
    }
}
let desktop = new DeskTop();
desktop.init("");

let callback = function () {
    alert("callback");
}
let data = {
  param:{"a":"b"},
  callback:callback
};
EventHub.publish(EngineEventManager.COMMAND_OpenPanel,data);