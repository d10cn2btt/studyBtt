"use strict";

var duplex = require('stream').Duplex;
var fs = require('fs');

duplex.Readable = fs.createReadStream('bigsize.txt');
duplex.Writable = fs.createWriteStream('sample_duplex.txt');

duplex.Readable.on('data', function (chunk) {
    duplex.Writable.write(chunk);
});

duplex.Writable.on('end', function () {
    console.log("Complete");
});