define(["require", "exports", "../../lib/HashMap"], function (require, exports, HashMap_1) {
    "use strict";
    var MainProcessTemplate = (function () {
        function MainProcessTemplate() {
            this.stepMap = new HashMap_1.HashMap();
            this.varMap = new HashMap_1.HashMap();
        }
        ;
        //----------------------------------------------adder--------------------------------------------------
        MainProcessTemplate.prototype.addStep = function (step) {
            this.stepMap.put(step.getId(), step);
        };
        ;
        MainProcessTemplate.prototype.addVarMap = function (expression, value) {
            this.varMap.put(expression, value);
        };
        ;
        //----------------------------------------------setter-------------------------------------------------
        MainProcessTemplate.prototype.setStartNodeId = function (startNodeId) {
            this.startNodeId = startNodeId;
        };
        ;
        //----------------------------------------------getter-------------------------------------------------
        MainProcessTemplate.prototype.getStartNodeId = function () {
            return this.startNodeId;
        };
        ;
        MainProcessTemplate.prototype.getStep = function (nodeId) {
            return this.stepMap.get(nodeId);
        };
        ;
        MainProcessTemplate.prototype.getVarMap = function () {
            return this.varMap;
        };
        ;
        return MainProcessTemplate;
    }());
    exports.MainProcessTemplate = MainProcessTemplate;
    ;
});
//# sourceMappingURL=MainProcessTemplate.js.map