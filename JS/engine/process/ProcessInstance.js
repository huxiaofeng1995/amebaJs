define(["require", "exports", "./ProcessInstanceThread", "../../lib/GUID"], function (require, exports, ProcessInstanceThread_1, GUID_1) {
    "use strict";
    /**
     * PI流程实例
     * -id
     * -context 上下文
     * -definitionPath 流程文件定义路径
     */
    var ProcessInstance = (function () {
        function ProcessInstance(id, context, definitionPath) {
            this.pitList = [];
            this.id = id;
            this.context = context;
            this.definitionPath = definitionPath;
            this.simpleName = this.definitionPath.substring(this.definitionPath.lastIndexOf('/') + 1) + "@" + this.context.getName();
            context.set("ProcessInstance", this); // 绑定PI在CTX里
        }
        ;
        /**
         * 准备流程执行，创建PIT
         */
        ProcessInstance.prototype.openThread = function () {
            var id, pit;
            id = "PIT-" + GUID_1.default();
            pit = new ProcessInstanceThread_1.ProcessInstanceThread(id, this);
            this.pitList.push(pit);
            return pit;
        };
        ;
        //--------------------------------------------------getter------------------------------------------------
        ProcessInstance.prototype.getId = function () {
            return this.id;
        };
        ;
        ProcessInstance.prototype.getContext = function () {
            return this.context;
        };
        ;
        ProcessInstance.prototype.getSimpleName = function () {
            return this.simpleName;
        };
        ;
        return ProcessInstance;
    }());
    exports.ProcessInstance = ProcessInstance;
    ;
});
//# sourceMappingURL=processInstance.js.map