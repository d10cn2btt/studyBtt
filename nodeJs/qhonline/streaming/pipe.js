"use strict";
var fs = require('fs');

var ws = fs.createWriteStream('sample_pipe.txt');
var rs = fs.createReadStream('bigsize.txt');

rs.pipe(ws);