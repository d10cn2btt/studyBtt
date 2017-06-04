"use strict";
var fs = require('fs');

var writeStream = fs.createWriteStream('abc.txt');
var readStream = fs.createReadStream('bigsize.txt');

readStream.on('data', function (chunk) {
    writeStream.write(chunk);
});

readStream.on('end', function () {
    writeStream.end();
    console.log('copied');
});