/**
 * Created by Oliver on 2016-08-04 0004.
 */
import {ICommandHandler} from "./ICommandHandler";
import {Command} from "./Command";
import {HashMap} from "../lib/HashMap";
import {EngineEventManager} from "./EngineEventManager";
import {OpenPanel} from "./commandhandlers/OpenPanel";

export class CommandHandlerExecutor {

    private handlers:HashMap = new HashMap();

    constructor (){
        this.registerCommandHandler(EngineEventManager.COMMAND_OpenPanel,new OpenPanel());
    }

    public handleEvent = function(msg,data){
        let command = new Command(msg,data.param);
        this.execute(command,data.callback);
    }

    public registerCommandHandler(name:string, handler:ICommandHandler) {
        this.handlers.put(name, handler);
    }

    public getCommandHandler(name:string):ICommandHandler {
        return this.handlers.get(name);
    }

    public execute(command:Command, callback:any) {
        let handler:ICommandHandler = this.handlers.get(name);
        handler.handleCommand(command, callback);
    }
}