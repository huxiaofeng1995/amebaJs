define(["require", "exports", "./ProcessInstanceThreadSegment", "../../runtime/Context", "../../runtime/realm/LogicRealm", "../../lib/GUID"], function (require, exports, ProcessInstanceThreadSegment_1, Context_1, LogicRealm_1, GUID_1) {
    "use strict";
    /**
     * PIT流程实例线程。并不是物理线程，而是逻辑意义上一个流程的线程。
     */
    var ProcessInstanceThread = (function () {
        function ProcessInstanceThread(id, processInstance) {
            this.id = id;
            this.processInstance = processInstance;
            this.logicRealm = new LogicRealm_1.LogicRealm(processInstance.getSimpleName() + ":" + id, processInstance.getContext());
            this.logicRealm.set("ProcessInstanceThread", this); // 绑定PIT到LR里
        }
        /**
         * 根据流程定义资源创建一个子流程。然后可以对segment对象的LRT进行服务对象配置，并调用其start方法启动。
         */
        ProcessInstanceThread.prototype.openSegment = function (definitionPath, callback) {
            var pit, id;
            pit = this;
            id = GUID_1.default();
            Context_1.Context.getCurrent().get("ResourceDocumentTable").getDocument(definitionPath, 'ProcessDefinition', function (definition) {
                callback(new ProcessInstanceThreadSegment_1.ProcessInstanceThreadSegment(id, pit, definitionPath, definition));
            });
        };
        ;
        //------------------------------------------------------getter------------------------------------------------
        ProcessInstanceThread.prototype.getId = function () {
            return this.id;
        };
        ;
        ProcessInstanceThread.prototype.getProcessInstance = function () {
            return this.processInstance;
        };
        ;
        /**
         * 获取当前PIT下的LR
         */
        ProcessInstanceThread.prototype.getLogicRealm = function () {
            return this.logicRealm;
        };
        ;
        return ProcessInstanceThread;
    }());
    exports.ProcessInstanceThread = ProcessInstanceThread;
    ;
});
//# sourceMappingURL=ProcessInstanceThread.js.map