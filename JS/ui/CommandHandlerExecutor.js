define(["require", "exports", "./Command", "../lib/HashMap", "./commandhandlers/OpenPanel", "../const/EngineEvent", "../const/ServiceObj"], function (require, exports, Command_1, HashMap_1, OpenPanel_1, EngineEvent_1, ServiceObj_1) {
    "use strict";
    var CommandHandlerExecutor = (function () {
        function CommandHandlerExecutor() {
            this.handlers = new HashMap_1.HashMap();
            this.handleEvent = function (msg, data) {
                var ctx = data.context;
                var executor = ctx.get(ServiceObj_1.ServiceObj.CommandHandlerExecutor);
                alert("收到事件!!" + msg + "  " + data.param);
                var command = new Command_1.Command(msg, data.param);
                executor.execute(command, data.callback);
            };
            this.registerCommandHandler(EngineEvent_1.EngineEvent.COMMAND_OpenPanel, new OpenPanel_1.OpenPanel());
        }
        CommandHandlerExecutor.prototype.registerCommandHandler = function (name, handler) {
            this.handlers.put(name, handler);
        };
        CommandHandlerExecutor.prototype.getCommandHandler = function (name) {
            return this.handlers.get(name);
        };
        CommandHandlerExecutor.prototype.execute = function (command, callback) {
            alert("开始执行");
            var handler = this.handlers.get(command.getName());
            alert("handler" + handler);
            handler.handleCommand(command, callback);
        };
        return CommandHandlerExecutor;
    }());
    exports.CommandHandlerExecutor = CommandHandlerExecutor;
});
//# sourceMappingURL=CommandHandlerExecutor.js.map