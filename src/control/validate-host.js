'use strict';
var ALLOWED_HOSTS = process.env.ALLOWED_HOSTS || 'localhost';

function execute(clientHost, callback) {
    if (ALLOWED_HOSTS.includes(clientHost.split(':')[0])) {
        callback(null, {message: clientHost + ' is allowed.'});
    } else {
        callback(true, {message: clientHost + ' is not allowed.'});
    }
}

module.exports = execute;