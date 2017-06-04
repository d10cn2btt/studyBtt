"use strict";
var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var path = 'video_sample.mp4';
    var stat = fs.statSync(path);
    var size = stat.size;

    if (req.headers.range) {
        var range = req.headers.range;
        var parts = range.replace('bytes=', '').split('-');
        var startRange = parseInt(parts[0], 10);
        var endRange = parts[1] ? parseInt(parts[1], 10) : size - 1;
        var chunk = (endRange - startRange) + 1;

        // why status code is 206 : https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
        res.writeHead(206, {
            'Content-Range': 'bytes ' + startRange + ' - ' + endRange + '/' + size,
            'Accept-Range': 'bytes',
            'Content-Length': chunk,
            'Content-Type': 'video/mp4'
        });
        var file = fs.createReadStream(path, {start: startRange, end: endRange});
        file.pipe(res);
    } else {
        res.writeHead(200, {'Content-Length': size, 'Content-Type': 'video/mp4'});
        fs.createReadStream(path).pipe(res);
    }
}).listen(6969);