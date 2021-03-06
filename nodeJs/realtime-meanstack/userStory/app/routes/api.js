/**
 * Created by MSI on 21-Apr-16.
 */
var User = require('../models/user');
var Story = require('../models/story');
var config = require('../../config');
var secretKey = config.seretKey;
var jsonwebtoken = require('jsonwebtoken');
var _ = require('underscore');

function createToken (user) {
    var token = jsonwebtoken.sign({
        id: user._id,
        name: user.name,
        username: user.username
    }, secretKey, {
        expiresInMinute: 1440
    });

    return token;
}

module.exports = function (app, express) {
    var api = express.Router();

    api.post('/signup', function (req, res) {
        var user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });

        user.save(function (err, data) {
            if (err) {
                res.send(err);
                return;
            }

            res.json({
                message: 'User has been created!',
                token: createToken(data)
            });
        });
    });

    api.get('/users', function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                res.send(err);
                return;
            }

            res.json(users);
        });
    });

    api.post('/login', function (req, res) {
        User.findOne({
            username: req.body.username
        }).select('username password name').exec(function (err, user) {
            if (err) throw err;

            if (!user) {
                res.send({
                    success: false,
                    message: "User doesn't exits"
                });
            } else {
                var validPassword = user.comparePassword(req.body.password);

                if (!validPassword) {
                    res.send({
                        success: false,
                        message: "Invalid Password"
                    });
                } else {
                    var token = createToken(user);
                    res.json({
                        success: true,
                        message: "Successfuly login!",
                        token: token
                    });
                }
            }
        });
    });
// code chạy từ trên xuống dưới - nếu bê cái middleware này lên đâu thì thằng users cũng dính
    api.use('/', function(req, res, next) {
        console.log("Somebody just came to our app!");
        var token = req.body.token || req.param('token') || req.headers['x-access-token'];

        //check if token exist
        if (token) {
            jsonwebtoken.verify(token, secretKey, function (err, decoded) {
                if (err) {
                    res.status(403).send({success: false, message: "Failed to authenticate user"});
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.status(403).json({success: false, message: "No Token Provided"});
        }
    });

    //Destination B //provide a legitimate token
    api.route('/').post(function (req, res) {
        var story = new Story({
            creator: req.decoded.id,
            content: req.body.content
        });

        story.save(function (err, story) {
            if (err) {
                res.send(err);
                return;
            }

            res.json({
                message: "New Story Created!",
                story: story
            });
        });
    })
    .get(function(req, res) {
        Story.find({creator: req.decoded.id}, function(err, stories) {
            if (err) {
                res.send(err);
                return;
            }

            res.json(stories);
        });
    });

    api.get('/me', function (req, res ) {
        res.json(req.decoded);
    });
    return api;
};