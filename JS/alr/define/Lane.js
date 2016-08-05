define(["require", "exports", "../../lib/HashMap"], function (require, exports, HashMap_1) {
    "use strict";
    var Lane = (function () {
        function Lane() {
            this.containsNodesId = new Array();
            this.data = new HashMap_1.HashMap();
        }
        Lane.prototype.getData = function () {
            return this.data;
        };
        Lane.prototype.addData = function (key, value) {
            this.data.put(key, value);
        };
        Lane.prototype.clearData = function () {
            this.data.removeAll();
        };
        Lane.prototype.getName = function () {
            return this.name;
        };
        Lane.prototype.setName = function (name) {
            this.name = name;
        };
        Lane.prototype.getWidth = function () {
            return this.width;
        };
        Lane.prototype.setWidth = function (width) {
            this.width = width;
        };
        Lane.prototype.getContainsNodesId = function () {
            return this.containsNodesId;
        };
        Lane.prototype.addNodeId = function (nodeId) {
            this.containsNodesId.push(nodeId);
        };
        return Lane;
    }());
    exports.Lane = Lane;
});
//# sourceMappingURL=Lane.js.map