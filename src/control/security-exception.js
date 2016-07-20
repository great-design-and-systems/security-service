'use strict';

module.exports = function(code) {
    var exception;
    switch(code) {
        case 401:
            exception = {
                error: 'Unauthorized',
                message: 'User Authentication Failed.'
            }; 
            break;
        case 403:
            exception = {
                error: 'Forbidden',
                message: 'Access Denied.'
            }; 
            break;
        case 500:
            exception = {
                error: 'Internal Server Error',
                message: 'Failed to create user session.'
            }; 
            break;           
    }
    return exception;
};