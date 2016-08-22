'use strict';
var logger = require('./get-logger');
var Session = require('../entity/Session');
var jwt    = require('jsonwebtoken');
var SECRET_KEY = 'assumptioncollege';

function execute(username, callback) {
    var token = jwt.sign(username, SECRET_KEY);
    Session.create({sessionId: token, username: username}, function(err, result) {
        if (err) {
            logger.error('create-session', err);
            callback({
                message: 'Failed to create session for ' + username
            });
        } else {
            callback(null, result);
        }
    });
}

module.exports = execute;