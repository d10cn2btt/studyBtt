"use strict";

var zlib = require('zlib');
var fs = require('fs');

var rs = fs.createReadStream('bigsize.txt');
var ws = fs.createWriteStream('bigsize.txt.zip');

rs.pipe(zlib.createGzip()).pipe(ws).on('finish', function () {
    console.log('zip successfull');
});