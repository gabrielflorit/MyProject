var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(done) {

		runSequence(
			'watch',
			'html',
			'browser-sync',
			'sass',
			'uglify'
		);
});