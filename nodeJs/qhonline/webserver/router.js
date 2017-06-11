"use strict";
let http = require('http');
let fs = require('fs');
let app = require('./app');
const PORT = 6969;

http.createServer(app.router).listen(PORT);
console.log('Server is running at port ' + PORT);