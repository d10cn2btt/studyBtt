"use strict";
let url = require('url');
let nodeStatic = require('node-static');
let file = new nodeStatic.Server(__dirname + "/template/");

let router = function (req, res) {
    switch (req.url) {
        case "/":
            req.url = 'index.html';
            break;
        case "/about":
            req.url = 'about.html';
            break;
        default:
            res.writeHead(404);
            res.write('Route not found');
            res.end();
    }

    if (req.method === "GET") {
        file.serve(req, res);
    }
};

module.exports.router = router;