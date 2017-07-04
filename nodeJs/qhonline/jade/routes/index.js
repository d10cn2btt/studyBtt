"use strict";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // check if server sent
    console.log(res._headerSent);
    res.render('index', {title: 'Express'});
    console.log(res._headerSent);
});

router.get('/info/:name/:age', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(`<h2> Info : ${req.params.name} & Age: ${req.params.age} </h2>`);
    res.end();
});

/**
 * Validate router by regular
 * ? : appear or not
 * + : appear at least one time
 * * : anything (ex: php*mysql => php-anything-mysql
 */
// http://localhost:3000/learn-js
// http://localhost:3000/learn-node-js
router.get('/learn-(node-)?js', function (req, res) {
    res.send('Nodejs');
});

/**
 * Next()
 */
router.get('/next', function(req, res, next) {
    console.log('action 01');
    next();
}, function (req, res) {
    res.send('111');
    console.log('next runned');
});

let next1 = function (req, res, next) {
    console.log('next 1');
    next();
};

let next2 = function (req, res, next) {
    console.log('next 2');
    res.send('Next 02');

    next();
};

let next3 = function (req, res, next) {
    console.log('next 3');
};

router.get('/next2', [next1, next2, next3]);

// redirect
router.get('/redirect', function (req, res, next) {
    // res.redirect('back'); // localhost:3000
    res.redirect('/next');
});

module.exports = router;
