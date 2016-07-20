'use strict';
var passwordHash = require('password-hash');

function execute(password, hashedPassword, callback) {
    callback(passwordHash.verify(password, hashedPassword));
}

module.exports = execute;