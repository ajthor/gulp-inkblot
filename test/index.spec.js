/* global describe, it, beforeEach, afterEach, before, after */
/* global expect, should, assert, require */

'use strict';

var chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert,
    should = chai.should();

describe('exported object', function() {

    var exported = require('/Users/adam/Dropbox/gulp-inkblot/index.js');

    it('should not be undefined', function() {
        expect(exported).to.not.be.undefined;
    });

    describe('indexJs function', function() {

        var indexJs = exported;

        it('should exist', function() {
            expect(indexJs).to.exist;
        });

        it('should load', function() {});

        it('should scaffold a demo file', function() {});

        it('should extract unit tests from a file', function() {});

        it('should delete unit tests from a file', function() {});

        it('should create JSON file if proper option is set', function() {});

    });
});