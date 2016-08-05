define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Created by Oliver on 2016-08-04 0004.
     */
    var ShowMessage = (function () {
        function ShowMessage() {
        }
        ShowMessage.prototype.handleCommand = function (command, callback) {
            var type = command.getData().param.get("type");
            var content = command.getData().param.get("content");
            if (type === "info") {
                console.log(content);
            }
            var end = "success";
            callback({
                end: end
            });
        };
        return ShowMessage;
    }());
    exports.ShowMessage = ShowMessage;
});
//# sourceMappingURL=ShowMessage.js.map