'use strict';
var ValidateHost = require('../control/validate-host');
var ValidatePassword = require('../control/validate-password');
var CreateSession = require('../control/create-session');
var ValidateSession = require('../control/validate-session');
module.exports = {
    validateHost: function (clientHost, callback) {
        new ValidateHost(clientHost, callback);
    },
    validatePassword: function (data, callback) {
        var password = data.password;
        var userPassword = data.currentPassword;
        new ValidatePassword(password, userPassword, function(result) {
            if (result) {
                callback(null, true);
            } else {
                callback(true);
            }
        });
    },
    createUserSession : function (username, callback) {
        new CreateSession(username, function(err, result) {
            if (err) {
                callback(err);
            } else {
                callback(null, result.session_id);
            }
        });
    },
    validateSession : function (sessionId, callback) {
        new ValidateSession(sessionId, callback);
    }
};