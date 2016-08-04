import {IProcessDefinitionAdapter} from "./IProcessDefinitionAdapter";
import {ProcessInstanceThreadSegment} from "./ProcessInstanceThreadSegment";
import {HashMap} from "../../lib/HashMap";

/**
 * 流程定义对象，通过adapter的辅助能够完成一些一般性功能。
 */
class ProcessDefinition {

    private adapter: IProcessDefinitionAdapter;
    private definitionBean: Object;

    constructor(adapter: IProcessDefinitionAdapter, definitionBean: Object) {
        this.adapter = adapter;
        this.definitionBean = definitionBean;
    }

    /**
     * 创建流程初始化的执行对象
     */
    public createInitRunnable(pits: ProcessInstanceThreadSegment): void {
        this.adapter.createInitRunnable(pits, this.definitionBean);
    };
    /**
     * 创建指定节点的执行对象
     */
    public createNodeRunnable(pits: ProcessInstanceThreadSegment, nodeId: string): void {
        this.adapter.createNodeRunnable(pits, this.definitionBean, nodeId);
    };
    
    //--------------------------------------------------------getter-----------------------------------------------
    /**
     * 获取指定节点的出口映射
     */
    public getOutNextMap(nodeId: string): HashMap {
        return this.adapter.getOutNextMap(this.definitionBean, nodeId);
    };
    /**
     * 获取起始节点ID
     */
    public getStartNodeId(): string {
        return this.adapter.getStartNodeId(this.definitionBean);
    };
    /**
     * 获取出口信息
     */
    public getEndValueMap(): HashMap {
        return this.adapter.getEndValueMap(this.definitionBean);
    };
}
    
export {ProcessDefinition};
