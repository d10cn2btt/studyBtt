var events = require('events'),
    emitter = new events.EventEmitter(),
    username = 'btt',
    pass = '123123';

emitter.on('start_event', function (username) {
    console.log("Your username is : " + username);
});

emitter.emit('start_event', username);