"use strict";
/**
 * Created by Oliver on 2016-08-04 0004.
 */
/// <reference path="../lib/pubsub.d.ts" />
var EventHub = (function () {
    function EventHub() {
    }
    /*
    * engine.command.*：订阅流程中的Command
    *
    * */
    EventHub.subscribe = function (topic, subscriber) {
        PubSub.subscribe(topic, subscriber);
    };
    EventHub.unsubscribe = function (subscriber) {
        PubSub.unsubscribe(subscriber);
    };
    EventHub.clearAllSubscriptions = function () {
        PubSub.clearAllSubscriptions();
    };
    return EventHub;
}());
exports.EventHub = EventHub;
//# sourceMappingURL=EventHub.js.map