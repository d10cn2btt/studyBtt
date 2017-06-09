"use strict";
var http = require('http');
var fs = require('fs');
var app = require('./app');
const PORT = 6969;

http.createServer(app.router).listen(PORT);
console.log('Server is running at port ' + PORT);