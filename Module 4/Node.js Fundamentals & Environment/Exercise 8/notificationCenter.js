const {EventEmitter} = require("events");

class NotificationCenter extends EventEmitter{
    constructor(){
        super();
    }
}

module.exports = NotificationCenter;
