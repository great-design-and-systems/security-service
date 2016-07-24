'use strict';
var Security = require('../src/boundary/security');
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
        var password = 'password';
        var currentPassword = 'sha1$d789e2d8$1$b9de8b3ac99f229f261571a786e0023c5dd2f065';
        var data = {};

        beforeEach(function () {
            data.password = password;
            data.currentPassword = currentPassword;
        });

        describe('WHEN: validating password', function () {
            var expectedResult;
            var userId;
            beforeEach(function (done) {
                Security.validatePassword(data, function(err, result) {
                    expectedResult = result;
                    done();
                });
            });

            it('THEN: return is true', function () {
                expect(expectedResult).to.equal(true);
            });
        });
    });

    afterEach(function (done) {
        return db.disconnect(done);
    });
    */
});