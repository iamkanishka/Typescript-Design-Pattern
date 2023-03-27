import Observer from './Observer.js';
import EventType from './EventType.js'


export default interface Observable{
    attach(customer: Observer):void;
    detach(customer: Observer):void;
    notify(event: EventType, info:String):void;
}
