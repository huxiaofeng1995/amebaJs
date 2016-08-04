define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * 流程执行结果对象
     */
    var ProcessResult = (function () {
        function ProcessResult() {
        }
        ;
        //------------------------------------------------setter---------------------------------------------------
        ProcessResult.prototype.setEnd = function (end) {
            this.end = end;
        };
        ;
        ProcessResult.prototype.setOutArgMap = function (outArgMap) {
            this.outArgMap = outArgMap;
        };
        ;
        //------------------------------------------------getter----------------------------------------------------
        ProcessResult.prototype.getEnd = function () {
            return this.end;
        };
        ;
        ProcessResult.prototype.getOutArgMap = function () {
            return this.outArgMap;
        };
        ;
        return ProcessResult;
    }());
    exports.ProcessResult = ProcessResult;
    ;
});
//# sourceMappingURL=ProcessResult.js.map