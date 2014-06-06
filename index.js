'use strict';

var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');

var inkblot = require('inkblot');

// describe inkblot function
	it('should load', function () {});
	it('should scaffold a demo file', function () {});
	it('should extract unit tests from a file', function () {});
// end
module.exports = function (options) {
	var ib = new inkblot(options);

	return through.obj(function (file, enc, callback) {
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError('gulp-inkblot', 'Streaming not supported.'));
			return callback();
		}
		
		options = options || {};

		try {

			ib.run(file);

		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-inkblot', 'Streaming not supported.'));
		}

		this.push(file);
		return callback();
	});
};