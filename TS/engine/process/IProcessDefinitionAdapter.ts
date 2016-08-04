import {HashMap} from "../../lib/HashMap";
import {ProcessInstanceThreadSegment} from "./ProcessInstanceThreadSegment";

interface IProcessDefinitionAdapter {
    createInitRunnable(pits: ProcessInstanceThreadSegment, definitionBean: Object): void;
    createNodeRunnable(pits: ProcessInstanceThreadSegment, definitionBean: Object, nodeId: string): void;

    getExceptionNext(definitionBean: Object, nodeId: string): string;
    getNodeCaption(definitionBean: Object, nodeId: string): string;
    getOutNextMap(definitionBean: Object, nodeId: string): HashMap;
    getStartNodeId(definitionBean: Object): string;
    getEndValueMap(definitionBean: Object): HashMap;
    getFileExtension(): string;

    parse(path: string, input: string, callback: Function): void;

}

export {IProcessDefinitionAdapter};