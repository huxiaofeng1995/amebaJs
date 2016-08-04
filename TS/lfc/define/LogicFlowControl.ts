import {HashMap} from "../../lib/HashMap";
import {ComponentElement} from "./ComponentElement";

/**
 * LFC文件对象
 */
class LogicFlowControl {
    private path: string;
    private componentElementMap = new HashMap();
    private startNodeId: string;
    private endValueMap = new HashMap();
    private varMap: HashMap = new HashMap();

    public constructor() {};

    public addComponentElement(ce: ComponentElement): void {
        this.componentElementMap.put(ce.getId(), ce);
    };
    public addEndValueMap(name: string, nextId: string): void {
        this.endValueMap.put(nextId, name);
    };
    public addVarMap(expression: string, value: string): void {
        this.varMap.put(expression, value);
    };
    
    //---------------------------------------------------------getter----------------------------------------------
    public getPath(): string {
        return this.path;
    };
    public getStartNodeId(): string {
        return this.startNodeId;
    };
    public getNode(nodeId: string): ComponentElement {
        return this.componentElementMap.get(nodeId);
    };
    public getVarMap(): HashMap {
        return this.varMap;
    };
    public getEndValueMap(): HashMap {
        return this.endValueMap;
    };
    //---------------------------------------------------------setter----------------------------------------------
    public setPath(path: string): void {
        this.path = path;
    };
    public setStartNodeId(startNodeId: string): void {
        this.startNodeId = startNodeId;
    };
};

export {LogicFlowControl};