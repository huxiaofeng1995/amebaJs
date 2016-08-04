define(["require", "exports", "../../lib/HashMap"], function (require, exports, HashMap_1) {
    "use strict";
    /**
     * LFC文件对象
     */
    var LogicFlowControl = (function () {
        function LogicFlowControl() {
            this.componentElementMap = new HashMap_1.HashMap();
            this.endValueMap = new HashMap_1.HashMap();
            this.varMap = new HashMap_1.HashMap();
        }
        ;
        LogicFlowControl.prototype.addComponentElement = function (ce) {
            this.componentElementMap.put(ce.getId(), ce);
        };
        ;
        LogicFlowControl.prototype.addEndValueMap = function (name, nextId) {
            this.endValueMap.put(nextId, name);
        };
        ;
        LogicFlowControl.prototype.addVarMap = function (expression, value) {
            this.varMap.put(expression, value);
        };
        ;
        //---------------------------------------------------------getter----------------------------------------------
        LogicFlowControl.prototype.getPath = function () {
            return this.path;
        };
        ;
        LogicFlowControl.prototype.getStartNodeId = function () {
            return this.startNodeId;
        };
        ;
        LogicFlowControl.prototype.getNode = function (nodeId) {
            return this.componentElementMap.get(nodeId);
        };
        ;
        LogicFlowControl.prototype.getVarMap = function () {
            return this.varMap;
        };
        ;
        LogicFlowControl.prototype.getEndValueMap = function () {
            return this.endValueMap;
        };
        ;
        //---------------------------------------------------------setter----------------------------------------------
        LogicFlowControl.prototype.setPath = function (path) {
            this.path = path;
        };
        ;
        LogicFlowControl.prototype.setStartNodeId = function (startNodeId) {
            this.startNodeId = startNodeId;
        };
        ;
        return LogicFlowControl;
    }());
    exports.LogicFlowControl = LogicFlowControl;
    ;
});
//# sourceMappingURL=LogicFlowControl.js.map