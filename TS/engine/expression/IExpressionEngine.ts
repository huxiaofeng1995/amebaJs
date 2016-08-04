import {ProcessInstanceThreadSegment} from "../process/ProcessInstanceThreadSegment";

interface IExpressionEngine {
    /**
     * 赋值
     */
    assign(expression: string, value: Object, pits: ProcessInstanceThreadSegment): void;
    
    /**
     * 取值
     */
    evaluate(expression: string, pits: ProcessInstanceThreadSegment): Object;
}

export {IExpressionEngine};