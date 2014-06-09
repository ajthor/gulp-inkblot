var gulp = require('gulp');
var gutil = require('gulp-util');

var jshint = require('gulp-jshint');
var inkblot = require('./index.js');
var mocha = require('gulp-mocha');

// Testing Task
// ============

gulp.task('lint', function () {
	return gulp.src(['index.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('inkblot', function () {
	return gulp.src(['index.js'])
		.pipe(inkblot())
		.on('error', gutil.log);
});

gulp.task('test', function () {
	return gulp.src(['./test/**/*.spec.js'])
		.pipe(mocha())
		.on('error', gutil.log);
});

gulp.task('watch', function () {
	gulp.watch(['index.js'], ['lint', 'inkblot']);
	gulp.watch(['./test/**/*.spec.js'], ['test']);
});

gulp.task('default', ['lint', 'inkblot', 'test', 'watch']);