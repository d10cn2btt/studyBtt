var events = require('events');
var util = require('util');

var School = function (address) {
    this.location = address;
};

// School will be inherit EventEmitter. It can use those EventEmitter's function, like : on(), emit()...
util.inherits(School, events.EventEmitter);

var LQD = new School('LQD');
var PTIT = new School('PTIT');
var UET = new School('UET');

var university = [LQD, PTIT, UET];

university.forEach(function (unver) {
    unver.on('where', function (msg) {
        console.log(unver.location + " is on the " + msg);
    })
});

LQD.emit('where', 'Ha Dong, Ha Noi');
PTIT.emit('where', 'Ao sen, Ha Dong');
UET.emit('where', 'Cau giay, Ha Noi');