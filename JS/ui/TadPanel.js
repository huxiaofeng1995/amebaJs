define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Created by Oliver on 2016-08-03 0003.
     */
    var TadPanel = (function () {
        function TadPanel(tadId, parentId, id) {
            this.widgetRegistry = {};
            this.id = "";
            this.parentId = "";
            this.tadId = "";
            this.tadId = tadId;
            this.parentId = parentId;
            this.id = id;
        }
        TadPanel.prototype.registerWidget = function (id, widget) {
            this.widgetRegistry[id] = widget;
        };
        TadPanel.prototype.getWidget = function (id) {
            return this.widgetRegistry[id];
        };
        TadPanel.prototype.start = function () {
        };
        return TadPanel;
    }());
    exports.TadPanel = TadPanel;
});
//# sourceMappingURL=TadPanel.js.map