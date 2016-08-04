import {IProcessDefinitionAdapter} from "../engine/process/IProcessDefinitionAdapter";
import {ProcessInstanceThreadSegment} from "../engine/process/ProcessInstanceThreadSegment";

class AbstractALRProcessDefinitionAdapter implements IProcessDefinitionAdapter {
    public createInitRunnable(pits: ProcessInstanceThreadSegment, definitionBean: Object): void {
        return null;
    }

    public createNodeRunnable(pits: ProcessInstanceThreadSegment, definitionBean: Object, nodeId: string): void {

    }

    public getExceptionNext(definitionBean: Object, nodeId: string): string {
        var bean;
        bean = <AgreeLogicRule> definitionBean;
    }

    public getNodeCaption(definitionBean: Object, nodeId: string): string {

    }

    public getOutNextMap(definitionBean: Object, nodeId: string): HashMap {

    }

    public getStartNodeId(definitionBean: Object): string {

    }

    public getEndValueMap(definitionBean: Object): HashMap {

    }

    public getFileExtension(): string {

    }

    public parse(path: string, input: string, callback: Function): void {

    }

}