'use strict';
var Security = require('./security');
var SecurityException = require('../control/security-exception');
var API = process.env.API_NAME || '/api/security/';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.status(200).send({
            domain: process.env.DOMAIN_NAME || 'Security',
            links: {
                validateHost: 'http://' + req.headers.host + API + 'validate-host',
                validatePassword: 'http://' + req.headers.host + API + 'validate-password',
                createUserSession: 'http://' + req.headers.host + API + 'create-user-session',
                validateSession: 'http://' + req.headers.host + API + 'validate-session'
            }
        });
    });

    app.get(API + 'validate-host', function(req, res) {
        Security.validateHost(req.headers.host, function(err, result) {
            if (err) {
                res.status(403).send(new SecurityException(403));
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result
                });
            }
        });
    });


    app.post(API + 'validate-password', function(req, res) {
        Security.validatePassword(req.body, function(err, result) {
            if (err) {
                res.status(401).send(new SecurityException(401));
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result
                });
            }
        });
    });

    app.post(API + 'create-user-session', function(req, res) {
        Security.createUserSession(req.body, function(err, result) {
            if (err) {
                res.status(500).send(new SecurityException(500));
            } else {
                res.status(200).send({
                    sessionId: result
                });
            }
        });
    });

    app.get(API + 'validate-session', function(req, res) {
        Security.validateSession(req.params.sessionId, function(err, result) {
            if (err) {
                res.status(401).send(new SecurityException(401));
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result
                });
            }
        });
    });
};