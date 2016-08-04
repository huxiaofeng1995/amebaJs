import {TADProcessDefinitionAdapter} from "../../tad/TADProcessDefinitionAdapter";
import {LFCProcessDefinitionAdapter} from "../../lfc/LFCProcessDefinitionAdapter";
import {ProcessDefinition} from "./ProcessDefinition";
import {IDocumentParser} from "../../resource/IDocumentParser";

/**
 * 流程定义对象解析器
 */
class ProcessDefinitionParser implements IDocumentParser {
    constructor() {};

    /**
     * 解析方法
     * -path 文件路径
     * -inputSteam 二进制文件流
     * -callback 回调函数
     */
    public parse(path: string, inputStream: string, callback: Function): void {
        var fileType, adapter, definitionBean;
        
        fileType = path.substr(path.lastIndexOf(".") + 1, path.length - 1);
        if(fileType === "tad") {
            adapter = new TADProcessDefinitionAdapter();
        } else if(fileType === "lfc") {
            adapter = new LFCProcessDefinitionAdapter();
        }
        definitionBean = adapter.parse(path, inputStream, function(definitionBean) {
            callback(new ProcessDefinition(adapter, definitionBean));
        });  
    };

};

export {ProcessDefinitionParser};