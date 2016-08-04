import {LogicRealm} from "./runtime/realm/LogicRealm";
import {LogicRealmTask} from "./runtime/realm/LogicRealmTask";
import {Context} from "./runtime/Context";
import {ResourceDocumentTable} from "./resource/ResourceDocumentTable";
import {DefaultExpressionEngine} from "./engine/expression/DefaultExpressionEngine";
import {ProcessInstanceFactory} from "./engine/process/ProcessInstanceFactory";
import GUID from "./lib/GUID";

function openTrade(tadPath: string): void {
    var contextId = GUID();
    var context = Context.baseContext.createChild("CTX:" + contextId);
    Context.prototype.setCurrent(context);
    
    var resourceDocumentTable = new ResourceDocumentTable();
    context.set("ResourceDocumentTable", resourceDocumentTable);
    
    var expressionEngine = new DefaultExpressionEngine();
    context.set("DefaultExpressionEngine", expressionEngine);
    
    var pif = new ProcessInstanceFactory();
    context.set("ProcessInstanceFactory", pif);
    
    // var tadPath = "/AppFramework_2013B/trade/test/bug0041/Bug0041.tad";
    // var tadPath = "business/commonComponent/ClearAll.lfc";
    pif.pitsByCreatingPI(context, tadPath, function(segment) {
        segment.start(null, function(processResult) {
            console.log("执行PITS回调");
            
            var outArgMap = processResult.getOutArgMap();
            //处理出参
            
            console.log("出口信息：" + processResult.getEnd());
            console.log("结束PITS: " + segment.getId());
        });
    });
}

export default function() {
    // openTrade("/AppFramework_2013B/trade/test/bug0041/Bug0041.tad");
    openTrade("/AppFramework_2013B/trade/test/bug0042/Bug0042.tad");
}