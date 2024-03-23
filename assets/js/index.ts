import {Tracker} from "./Tracker";
const tracker = new Tracker();
// must cast as any to set property on window
const _global = (window /* browser */ || global /* node */) as any
_global.pageLoad = tracker.trackPageLoad.bind(tracker); // bind `this` context
_global.trackEvent = tracker.trackEvent.bind(tracker); // bind `this` context
_global.setUserId = tracker.setUserId.bind(tracker); // bind `this` context
_global.addUserAttribute = tracker.addUserAttribute.bind(tracker); // bind `this` context

