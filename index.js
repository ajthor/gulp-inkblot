'use strict';

var _ = require('underscore');

var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');

var inkblot = require('inkblot');

// describe indexJs function
	it('should load', function () {});
	it('should scaffold a demo file', function () {});
	it('should extract unit tests from a file', function () {});
	it('should delete unit tests from a file', function () {});
	it('should create JSON file if proper option is set', function () {});
// end
module.exports = function (options) {
	options = _.defaults((options || {}), {
		autoReplace: true,
		autoRemove: false,
		createJSON: false,
		enablePrompts: false,
		silent: false
	});
	
	var ib = new inkblot(options);

	return through.obj(function (file, enc, callback) {
		var ext = path.extname(file.path);
		var base = path.basename(file.path, ext);

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

			ib.compile({
				cwd: file.cwd,
				path: file.path,
				ext: ext,
				base: base,
				name: path.basename(file.path),
				spec: path.join(ib.options.out, base + '.spec' + ext),
				_contents: file._contents
			}, 
			function (err) {
				console.log(err);
				if (err) {
					this.emit('error', new gutil.PluginError('gulp-inkblot', err));						
				}

				this.push(file);
				return callback();

			}.bind(this));

		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-inkblot', 'Streaming not supported.'));
			this.push(file);
			return callback();
		}

	});
};