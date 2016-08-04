import {EventHub} from "../runtime/EventHub";
import {OpenPanel} from "./commandhandlers/OpenPanel";
import {CommandHandlerExecutor} from "./CommandHandlerExecutor";
/**
 * Created by Oliver on 2016-08-04 0004.
 */
export class EngineEventManager {

    public static ENGINE_EVENT ="engine.command";
    public static COMMAND_OpenPanel=EngineEventManager.ENGINE_EVENT+"OpenPanel";

    public static init(subscriber:any){
        EventHub.subscribe(EngineEventManager.COMMAND_OpenPanel,subscriber);
    }

}