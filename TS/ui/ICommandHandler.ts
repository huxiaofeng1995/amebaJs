/**
 * Created by Oliver on 2016-08-04 0004.
 */
import {Command} from "./Command";

export interface ICommandHandler {

    handleCommand( command :Command, callack : any):void ;
}