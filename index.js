'use strict';

var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');

var inkblot = require('inkblot');

module.exports = function (options) {
	var inkblot = new inkblot(options);

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

			inkblot.run(file);

		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-inkblot', 'Streaming not supported.'));
		}

		this.push(file);
		return callback();
	});
};