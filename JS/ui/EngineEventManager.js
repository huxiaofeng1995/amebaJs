define(["require", "exports", "../runtime/EventHub", "../const/EngineEvent"], function (require, exports, EventHub_1, EngineEvent_1) {
    "use strict";
    /**
     * Created by Oliver on 2016-08-04 0004.
     */
    var EngineEventManager = (function () {
        function EngineEventManager() {
        }
        EngineEventManager.init = function (subscriber) {
            EventHub_1.EventHub.subscribe(EngineEvent_1.EngineEvent.COMMAND_OpenPanel, subscriber);
        };
        return EngineEventManager;
    }());
    exports.EngineEventManager = EngineEventManager;
});
//# sourceMappingURL=EngineEventManager.js.map