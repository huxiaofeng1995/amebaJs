import {HashMap} from "../../lib/HashMap";

/**
 * 流程执行结果对象
 */
class ProcessResult {
    private end: string;  // 出口信息
    private outArgMap: HashMap; // 出参内容

    public constructor() {};
    
    //------------------------------------------------setter---------------------------------------------------
    public setEnd(end: string): void {
        this.end = end;
    };
    public setOutArgMap(outArgMap: HashMap): void {
        this.outArgMap = outArgMap;
    };
    
    //------------------------------------------------getter----------------------------------------------------
    public getEnd(): string {
        return this.end;
    };
    public getOutArgMap(): HashMap {
        return this.outArgMap;
    };
};

export {ProcessResult};