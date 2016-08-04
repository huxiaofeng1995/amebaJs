/**
 * Created by Oliver on 2016-08-04 0004.
 */
import {ICommandHandler} from "./ICommandHandler";
import {Command} from "./Command";
import {HashMap} from "../lib/HashMap";
import {EngineEventManager} from "./EngineEventManager";
import {OpenPanel} from "./commandhandlers/OpenPanel";
import {EngineEvent} from "../const/EngineEvent";

export class CommandHandlerExecutor {

    private handlers:HashMap = new HashMap();

    constructor (){
        this.registerCommandHandler(EngineEvent.COMMAND_OpenPanel,new OpenPanel());
    }

    public handleEvent = function(msg,data){
        let executor :CommandHandlerExecutor =  data.executor;

        alert("收到事件!!"+msg+"  "+data.param);
        let command = new Command(msg,data.param);
        executor.execute(command,data.callback);
    }

    public registerCommandHandler(name:string, handler:ICommandHandler) {
        this.handlers.put(name, handler);
    }

    public getCommandHandler(name:string):ICommandHandler {
        return this.handlers.get(name);
    }

    public execute(command:Command, callback:any) {
        alert("开始执行");
        let handler:ICommandHandler = this.handlers.get(command.getName());
        alert("handler"+handler);
        handler.handleCommand(command, callback);
    }
}