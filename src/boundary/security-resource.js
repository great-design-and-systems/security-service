'use strict';
var Security = require('./security');
var SecurityException = require('../control/security-exception');
var API = process.env.API_NAME || '/api/security/';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.status(200).send({
            domain: process.env.DOMAIN_NAME || 'Security',
            links: {
                validateHost: {
                    method: 'GET',
                    url: 'https://' + req.headers.host + API + 'validate-host'
                },
                validatePassword: {
                    method: 'POST',
                    url: 'http://' + req.headers.host + API + 'validate-password'
                },
                createUserSession: {
                    method: 'POST',
                    url: 'http://' + req.headers.host + API + 'create-user-session'
                },
                validateSession: {
                    method: 'GET',
                    url: 'http://' + req.headers.host + API + 'validate-session/:sessionId'
                }
            }
        });
    });
    app.get(API + 'validate-host', function (req, res) {
        Security.validateHost(req.headers.host, function (err, result) {
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
    app.post(API + 'validate-password', function (req, res) {
        Security.validatePassword(req.body, function (err, result) {
            if (err) {
                //res.status(401).send(new SecurityException(401));
                res.status(401).send({ message: 'Invalid password.' });
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result
                });
            }
        });
    });
    app.post(API + 'create-user-session', function (req, res) {
        Security.createUserSession(req.body.username, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send({
                    sessionId: result
                });
            }
        });
    });
    app.get(API + 'validate-session/:sessionId', function (req, res) {
        Security.validateSession(req.params.sessionId, function (err, result) {
            if (err) {
                //res.status(401).send(new SecurityException(401));
                res.status(401).send({ message: 'Invalid session.' });
            } else {
                res.status(200).send({
                    message: 'ok',
                    result: result
                });
            }
        });
    });
};
