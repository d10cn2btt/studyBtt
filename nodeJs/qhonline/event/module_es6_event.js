const events = require('events');

class School extends events {
    constructor(address)
    {
        super();
        this.setLocation(address);
        this.listenEvent();
    }

    setLocation(address)
    {
        this.location = address;
    }

    listenEvent()
    {
        this.on('where', function (msg) {
            console.log(this.location + " is on the " + msg);
        });
    }

    fireEvent(msg)
    {
        this.emit('where', msg);
    }
}

module.exports = School;