define(["require", "exports", "../../tad/TADProcessDefinitionAdapter", "../../lfc/LFCProcessDefinitionAdapter", "../../alr/ALRProcessDefinitionAdapter", "./ProcessDefinition"], function (require, exports, TADProcessDefinitionAdapter_1, LFCProcessDefinitionAdapter_1, ALRProcessDefinitionAdapter_1, ProcessDefinition_1) {
    "use strict";
    /**
     * 流程定义对象解析器
     */
    var ProcessDefinitionParser = (function () {
        function ProcessDefinitionParser() {
        }
        ;
        /**
         * 解析方法
         * -path 文件路径
         * -inputSteam 二进制文件流
         * -callback 回调函数
         */
        ProcessDefinitionParser.prototype.parse = function (path, inputStream, callback) {
            var fileType, adapter, definitionBean;
            fileType = path.substr(path.lastIndexOf(".") + 1, path.length - 1);
            if (fileType === "tad") {
                adapter = new TADProcessDefinitionAdapter_1.TADProcessDefinitionAdapter();
            }
            else if (fileType === "lfc") {
                adapter = new LFCProcessDefinitionAdapter_1.LFCProcessDefinitionAdapter();
            }
            else if (fileType === "alr") {
                adapter = new ALRProcessDefinitionAdapter_1.ALRProcessDefinitionAdapter();
            }
            definitionBean = adapter.parse(path, inputStream, function (definitionBean) {
                callback(new ProcessDefinition_1.ProcessDefinition(adapter, definitionBean));
            });
        };
        ;
        return ProcessDefinitionParser;
    }());
    exports.ProcessDefinitionParser = ProcessDefinitionParser;
    ;
});
//# sourceMappingURL=ProcessDefinitionParser.js.map