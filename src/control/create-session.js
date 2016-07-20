'use strict';
var Session = require('../entity/Session');
var jwt    = require('jsonwebtoken');
var SECRET_KEY = 'assumptioncollege';

function execute(username, callback) {
    var token = jwt.sign(username, SECRET_KEY);
    Session.create({sessionId: token, username: username}, callback);
}

module.exports = execute;