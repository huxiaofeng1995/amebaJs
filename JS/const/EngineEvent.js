define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Created by Oliver on 2016-08-04 0004.
     */
    var EngineEvent = (function () {
        function EngineEvent() {
        }
        EngineEvent.ENGINE_EVENT = "engine.command.";
        EngineEvent.COMMAND_OpenPanel = EngineEvent.ENGINE_EVENT + "OpenPanel";
        EngineEvent.COMMAND_ShowMessage = EngineEvent.ENGINE_EVENT + "ShowMessage";
        return EngineEvent;
    }());
    exports.EngineEvent = EngineEvent;
});
//# sourceMappingURL=EngineEvent.js.map