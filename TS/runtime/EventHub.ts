/**
 * Created by Oliver on 2016-08-04 0004.
 */
/// <reference path="../lib/pubsub.d.ts" />
export class EventHub {

    /*
    * engine.command.*：订阅流程中的Command
    *
    * */
    public static subscribe(topic :string,subscriber:any){
        PubSub.subscribe(topic,subscriber);
    }

    public static unsubscribe( subscriber:any ){
        PubSub.unsubscribe(subscriber);
    }

    public static clearAllSubscriptions():void{
        PubSub.clearAllSubscriptions();
    }
}