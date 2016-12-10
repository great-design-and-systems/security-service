'use strict';

module.exports = function(code) {
    var exception;
    switch(code) {
        case 401:
            exception = new Error('User Authentication Failed.');
            break;
        case 403:
            exception = new Error('Access denied');
            break;
        case 500:
            exception = new Error('Failed to create user name');
            break;           
    }
    return exception;
};
