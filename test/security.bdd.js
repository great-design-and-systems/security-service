'use strict';
var User = require('../src/boundary/security');
var Database = require('./config/database');
var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var CONNECT_TEST_TIMEOUT = process.env.CONNECT_TEST_TIMEOUT || 50000;
describe('Security Service BDD', function () {
   /* var db = new Database();

    beforeEach(function (done) {
        this.timeout(CONNECT_TEST_TIMEOUT);
        return db.connect(done);
    });

    describe('GIVEN: the password is validated', function () {
        var password = 'hashedPassword';
        var currentPassword = 'originalPassword';
        var data = {};

        beforeEach(function () {
            data.password = password;
            data.currentPassword = currentPassword;
        });

        describe('WHEN: validating password', function () {
            var savedResult;
            var userId;
            beforeEach(function (done) {
                User.register(registrationForm, function (err, userSavedResult) {
                    savedResult = userSavedResult;
                    userId = userSavedResult.userId;
                    done();
                });
            });

            it('THEN: response is ok', function () {
                expect(!!savedResult).to.equal(true);
            });
        });
    });

    afterEach(function (done) {
        return db.disconnect(done);
    });
    */
});