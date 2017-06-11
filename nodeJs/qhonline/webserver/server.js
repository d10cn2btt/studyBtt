"use strict";
var http = require('http');
var fs = require('fs');
const PORT = 6969;

http.createServer(function (req, res) {
    // Opt 1
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // fs.createReadStream(__dirname + '/template.html').pipe(res);

    // Opt 2
    fs.readFile(__dirname + '/template.html', 'utf-8', function (error, content) {
        if (error) {
            console.log(error);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
            res.end();
        }
    });

    if(req.url.indexOf('.css') !== -1){ //req.url has the pathname, check if it conatins '.css'
        fs.readFile(__dirname + '/bootstrap.min.css', 'utf-8', function (error, content) {
            if (error) {
                console.log(error);
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(content);
                res.end();
            }
        });
    }

}).listen(PORT);
console.log('Server is running at port ' + PORT);