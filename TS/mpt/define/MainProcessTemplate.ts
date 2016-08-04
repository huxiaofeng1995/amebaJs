import {HashMap} from "../../lib/HashMap";
import {MPTStep} from "./define/MPTStep";

class MainProcessTemplate {
    private startNodeId: string;
    private stepMap: HashMap = new HashMap();
    private varMap: HashMap = new HashMap();

    public constructor() {};

    //----------------------------------------------adder--------------------------------------------------
    public addStep(step: MPTStep): void {
        this.stepMap.put(step.getId(), step);
    };
    public addVarMap(expression: string, value: any): void {
        this.varMap.put(expression, value);
    };
    
    //----------------------------------------------setter-------------------------------------------------
    public setStartNodeId(startNodeId: string): void {
        this.startNodeId = startNodeId;
    };
    
    //----------------------------------------------getter-------------------------------------------------
    public getStartNodeId(): string {
        return this.startNodeId;
    };
    public getStep(nodeId): MPTStep {
        return this.stepMap.get(nodeId);
    };
    public getVarMap(): HashMap {
        return this.varMap;
    };
};

export {MainProcessTemplate};