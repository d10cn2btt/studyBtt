"use strict";
let router = function (req, res) {
    console.log(req.url);
    res.end();
};

module.exports.router = router;