'use strict';

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
			(function () {
				var ext = path.extname(file.path);
				var base = path.basename(file.path, ext);

				ib.compile({
					cwd: file.cwd,
					path: file.path,
					ext: ext,
					base: base,
					name: path.basename(file.path),
					spec: path.join(ib.options.out, base + '.spec' + ext),
					_contents: file._contents
				});

			})();

		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-inkblot', 'Streaming not supported.'));
		}

		this.push(file);
		return callback();
	});
};