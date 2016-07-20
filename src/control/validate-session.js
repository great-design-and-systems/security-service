'use strict';
var Session = require('../entity/Session');

function execute(sessionId, callback) {
    Session.findOne({ sessionId: sessionId }, function (err, result) {
        if (err) {
            callback(err);
        } else {
            if (result) {
                callback(null, {message: 'sessionId found'});
            } else {
                callback(true, {message: 'sessionId not found'});
            }
        }
    });
}

module.exports = execute;