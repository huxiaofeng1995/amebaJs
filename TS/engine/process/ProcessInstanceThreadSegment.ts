import {HashMap} from "../../lib/HashMap";
import {LogicRealmTask} from "../../runtime/realm/LogicRealmTask";
import {ProcessResult} from "./ProcessResult";
import {ProcessInstanceThread} from "./ProcessInstanceThread";
import {ProcessDefinition} from "./ProcessDefinition";
 
/**
 * PITC流程实例线程片段。一个流程实例线程可以嵌套依次执行多个文件，每个文件的执行为一个线段(segment)。
 */
class ProcessInstanceThreadSegment {
    private id: string;
    private pit: ProcessInstanceThread;
    private currentNodeId: string;
    private currentNodeEndId: string;
    private definitionPath: string;
    private definition: ProcessDefinition;
    private inArgMap: Array<HashMap> = [];  // 入参容器
    private outArgMap: Array<HashMap> = []; // 出参容器
    private varMap: HashMap = new HashMap();
    private exceptionStack: Array<string> = [];
    private currentNodeEndName: string;
    private coreTask: LogicRealmTask;   // 核心任务
    
    public constructor(id: string, pit: ProcessInstanceThread, definitionPath: string, definition: ProcessDefinition) {
        this.id = id;
        this.pit = pit;
        this.definitionPath = definitionPath;
        this.definition = definition;
        var PITS = this;
        this.coreTask = new LogicRealmTask(PITS.getProcessInstanceThread().getLogicRealm(), PITS.getSimplePathName(definitionPath), function() {
            PITS.stepCoreStart();
        });
        this.coreTask.set("ProcessInstanceThreadSegment", this);
    }

    /**
     * PITS启动函数
     * callback 流程完毕或异常的回调逻辑函数对象
     */
    public start(inArgMap: HashMap, callback: Function): LogicRealmTask {
        console.log("启动PITS： " + this.id);
        var PITS, controlTask;
        
        PITS = this;  // 避免this指代混乱
        
        // 处理入参
        if(inArgMap != undefined) {
            this.inArgMap.push(inArgMap);
        }
        
        // 构造控制任务
        controlTask = new LogicRealmTask(PITS.coreTask.getRealm(), "Control(" + PITS.coreTask.getName() + ")", /* LRT的具体逻辑实现 */function() {
            var subHead;
            
            subHead = controlTask.startSub(function() {
                PITS.stepControlFinal(callback);  // 该分支执行完之后的逻辑控制
            });
            subHead.hook(PITS.coreTask); //将coreTask核心任务挂接到controlTask任务下
        });
        
        // 返回
        return controlTask.schedule();
    };
    /**
     * 全部lfc节点执行完之后再执行
     * 用于控制整个lfc执行完之后的走向
     */
    public stepControlFinal(callback: Function): void {
        var current, processResult, endValueMap, endName;
        
        this.currentNodeId = undefined;
        current = this.pit.getLogicRealm().getCurrentTask();
        // 做成功标记
        endValueMap = this.definition.getEndValueMap();
        if(endValueMap != undefined) {
            endName = endValueMap.get(this.currentNodeEndId);
        } else {
            endName = "success";
        }
        current.end(endName);
        if(this.exceptionStack.length != 0) {
            //处理异常
        } else {
            processResult = new ProcessResult();
            processResult.setEnd(this.coreTask.getParent().getSelectedEnd());
            processResult.setOutArgMap(this.outArgMap);
            callback(processResult);
        }
    };
    /**
     * 开始执行流程
     */
    public stepCoreStart(): void {
        var PITS, currentTask, sub;
        
        PITS = this;  // 避免this指代混乱
        // 1. 本地执行
        // 1.0 子任务流开始
        currentTask = PITS.coreTask.getCurrent();
        sub = currentTask.startSub(function() {
            PITS.createCoreLogic(); // 子任务结束后的逻辑执行
        });
        // 1.1 初始化任务
        sub = sub.hook(PITS.createInitTask());
        // 1.2 开始节点任务
        sub.hook(PITS.createNodeTask(PITS.getStartNodeId()));  
    };
    /**
     * 流程节点完结后的逻辑执行
     */
    public createCoreLogic(): void {
        this.stepCoreLogic();
    };
    /**
     * 处理节点完结后的逻辑去向
     */
    public stepCoreLogic(): void {
        var PITS, currentTask, subHead;
        
        PITS = this;  // 避免this指代混乱
        
        if(PITS.currentNodeEndId > 1000) {
            console.log("流程结束");
            console.log("----------------------------");
        } else {
            // 创建下一个节点任务
            currentTask = PITS.pit.getLogicRealm().getCurrentTask();
            subHead = currentTask.startSub(function() {
                PITS.createCoreLogic();
            });
            subHead.hook(PITS.createNodeTask(PITS.currentNodeEndId));
        }
    };
    /**
     * 创建初始化任务
     */
    public createInitTask(): LogicRealmTask {
        var PITS = this;  // 避免this指代混乱
        
        return new LogicRealmTask(PITS.coreTask.getRealm(), "init", function() {
            PITS.definition.createInitRunnable(PITS);
        });  
    };
    /**
     * 创建节点任务
     */
    public createNodeTask(nodeId: string): LogicRealmTask {
        var PITS, nodeLRT, outs, endName, endId;
        
        PITS = this;  // 避免this指代混乱
        // 创建节点任务
        nodeLRT = new LogicRealmTask(PITS.coreTask.getRealm(), "节点-" + nodeId, function() {
            PITS.stepNodeIn(nodeId);
        });
        
        // 获取节点出口，给节点后续进行挂钩
        outs = PITS.definition.getOutNextMap(nodeId);
        if(outs != undefined) {
            for(endName in outs.map) {
                endId = outs.map[endName];
                nodeLRT.hook(new LogicRealmTask(nodeLRT.realm , "StepNodeOut", function() {
                    PITS.stepNodeOut(endName, endId);
                }), endName);
            }
        }
        return nodeLRT;
    };
    /**
     * 开始执行节点任务
     */
    public stepNodeIn(nodeId: string): void {
        console.log("-----------------------------");
        this.currentNodeId = nodeId;
        console.log("开始执行" + this.definitionPath + "的节点：" + nodeId);
        // con
        this.definition.createNodeRunnable(this, nodeId);  // 托管给ProcessDefinition对象执行
    };
    /**
     * 处理节点出口
     */
    public stepNodeOut(endName: string, endId: string): void {
        console.log("end.name为：" + endName);
        console.log("end.next为：" + endId);
        this.currentNodeEndId = endId;  // 标记出口信息
        this.currentNodeEndName = endName;
    };
    
    public addVarMap(expression: string, value: any) {
        this.varMap.put(expression, value);
    };
    
    //------------------------------------------------------getter-----------------------------------------------
    /**
     * 获取当前PITS所属的PIT
     */
    public getProcessInstanceThread(): ProcessInstanceThread {
        return this.pit;
    };
    public getSimplePathName(path: string): string {
        return path.substring(path.lastIndexOf('/') + 1);
    };
    /**
     * 获取流程开始的节点ID
     */
    public getStartNodeId(): string {
        if (this.currentNodeId != undefined) {
            return this.currentNodeId;
        }
        return this.definition.getStartNodeId();
    };
    public getCurrentNodeId(): string {
        return this.currentNodeId;
    };
    /**
     * 获取流程的内部变量
     */
    public getVarMap(expression: string): any {
        var value = this.varMap.get(expression);
        if(value == null) {
            return "";
        } else {
            return value;
        }
    };
    public getVarMaps(): HashMap {
        return this.varMap;
    };
    public getId(): string {
        return this.id;
    };
    public getCoreTask(): LogicRealmTask {
        return this.coreTask;
    }
    
};

export {ProcessInstanceThreadSegment};