define(["require", "exports", "./runtime/Context", "./resource/ResourceDocumentTable", "./engine/expression/DefaultExpressionEngine", "./engine/process/ProcessInstanceFactory", "./lib/GUID"], function (require, exports, Context_1, ResourceDocumentTable_1, DefaultExpressionEngine_1, ProcessInstanceFactory_1, GUID_1) {
    "use strict";
    function openTrade(tadPath) {
        var contextId = GUID_1.default();
        var context = Context_1.Context.baseContext.createChild("CTX:" + contextId);
        Context_1.Context.prototype.setCurrent(context);
        var resourceDocumentTable = new ResourceDocumentTable_1.ResourceDocumentTable();
        context.set("ResourceDocumentTable", resourceDocumentTable);
        var expressionEngine = new DefaultExpressionEngine_1.DefaultExpressionEngine();
        context.set("DefaultExpressionEngine", expressionEngine);
        var pif = new ProcessInstanceFactory_1.ProcessInstanceFactory();
        context.set("ProcessInstanceFactory", pif);
        // var tadPath = "/AppFramework_2013B/trade/test/bug0041/Bug0041.tad";
        // var tadPath = "business/commonComponent/ClearAll.lfc";
        pif.pitsByCreatingPI(context, tadPath, function (segment) {
            segment.start(null, function (processResult) {
                console.log("执行PITS回调");
                var outArgMap = processResult.getOutArgMap();
                //处理出参
                console.log("出口信息：" + processResult.getEnd());
                console.log("结束PITS: " + segment.getId());
            });
        });
    }
    function default_1() {
        // openTrade("/AppFramework_2013B/trade/test/bug0041/Bug0041.tad");
        openTrade("/AppFramework_2013B/trade/test/bug0042/Bug0042.tad");
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
});
//# sourceMappingURL=main.js.map