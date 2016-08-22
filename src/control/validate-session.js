'use strict';
var Session = require('../entity/Session');
var logger = require('./get-logger');

function execute(sessionId, callback) {
    Session.findOne({ sessionId: sessionId }, function (err, result) {
        if (err) {
        	logger.error('validate-session', err);
            callback({
                message: 'Failed to get session ' + sessionId
            });
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