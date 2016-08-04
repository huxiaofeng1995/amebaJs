define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * 流程定义对象，通过adapter的辅助能够完成一些一般性功能。
     */
    var ProcessDefinition = (function () {
        function ProcessDefinition(adapter, definitionBean) {
            this.adapter = adapter;
            this.definitionBean = definitionBean;
        }
        /**
         * 创建流程初始化的执行对象
         */
        ProcessDefinition.prototype.createInitRunnable = function (pits) {
            this.adapter.createInitRunnable(pits, this.definitionBean);
        };
        ;
        /**
         * 创建指定节点的执行对象
         */
        ProcessDefinition.prototype.createNodeRunnable = function (pits, nodeId) {
            this.adapter.createNodeRunnable(pits, this.definitionBean, nodeId);
        };
        ;
        //--------------------------------------------------------getter-----------------------------------------------
        /**
         * 获取指定节点的出口映射
         */
        ProcessDefinition.prototype.getOutNextMap = function (nodeId) {
            return this.adapter.getOutNextMap(this.definitionBean, nodeId);
        };
        ;
        /**
         * 获取起始节点ID
         */
        ProcessDefinition.prototype.getStartNodeId = function () {
            return this.adapter.getStartNodeId(this.definitionBean);
        };
        ;
        /**
         * 获取出口信息
         */
        ProcessDefinition.prototype.getEndValueMap = function () {
            return this.adapter.getEndValueMap(this.definitionBean);
        };
        ;
        return ProcessDefinition;
    }());
    exports.ProcessDefinition = ProcessDefinition;
});
//# sourceMappingURL=ProcessDefinition.js.map