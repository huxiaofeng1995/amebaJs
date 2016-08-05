/**
 * Created by Oliver on 2016-08-04 0004.
 */
"use strict";
var Context_1 = require("../runtime/Context");
var GUID_1 = require("../lib/GUID");
var HashMap_1 = require("../lib/HashMap");
var EngineEventManager_1 = require("./EngineEventManager");
var CommandHandlerExecutor_1 = require("./CommandHandlerExecutor");
var Tad_1 = require("./Tad");
var DefaultPanelFactory = (function () {
    function DefaultPanelFactory() {
    }
    DefaultPanelFactory.prototype.getPanelComposite = function () {
        return $("BODY");
    };
    return DefaultPanelFactory;
}());
var DeskTop = (function () {
    function DeskTop() {
        this.panelCompositeFactoryRegistry = new HashMap_1.HashMap();
    }
    // private static CONTEXT_PREFIX =""
    DeskTop.prototype.getContext = function () {
        return this.sessionCtx;
    };
    DeskTop.prototype.init = function (tadPath) {
        // 0.创建Context
        this.sessionCtx = Context_1.Context.baseContext.createChild("Desktop_" + GUID_1.default());
        //  0.创建面板工厂
        var defaultPanelFactory = new DefaultPanelFactory();
        this.panelCompositeFactoryRegistry.put(DeskTop.PANEL_FACTORY_DEFAULT, defaultPanelFactory);
        // 0.注册事件模块
        var commandExecutor = new CommandHandlerExecutor_1.CommandHandlerExecutor();
        this.getContext().set("CommandHandlerExecutor", commandExecutor);
        EngineEventManager_1.EngineEventManager.init(commandExecutor);
        // 1.启动tad
        var id = "Tad_" + GUID_1.default();
        var defaultTad = new Tad_1.Tad(id);
        defaultTad.start();
    };
    DeskTop.PANEL_FACTORY_DEFAULT = "";
    DeskTop.PANEL_FACTORY_WINDOW = "window";
    return DeskTop;
}());
exports.DeskTop = DeskTop;
//# sourceMappingURL=DeskTop.js.map