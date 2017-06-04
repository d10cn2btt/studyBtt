"use strict";

var fs = require('fs');
var readStream = fs.createReadStream('bigsize.txt');

var content = '';
var chunk;

readStream.on('readable', function () {
    while ((chunk = readStream.read()) != null) {
        content += chunk;
    }
});

readStream.on('end', function () {
    console.log(content);
});