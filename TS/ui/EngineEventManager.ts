import {EventHub} from "../runtime/EventHub";
import {OpenPanel} from "./commandhandlers/OpenPanel";
import {CommandHandlerExecutor} from "./CommandHandlerExecutor";
import {EngineEvent} from "../const/EngineEvent";

/**
 * Created by Oliver on 2016-08-04 0004.
 */
export class EngineEventManager {

    public static init(subscriber:any){
        EventHub.subscribe(EngineEvent.COMMAND_OpenPanel,subscriber);
    }

}