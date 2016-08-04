/**
 * Created by Oliver on 2016-08-03 0003.
 */
interface PubSub {

    subscribe(topic:string, subscriber:any):PubSub;

    unsubscribe( subscriber:any ):PubSub;

    clearAllSubscriptions():PubSub;
}
declare var PubSub: PubSub;