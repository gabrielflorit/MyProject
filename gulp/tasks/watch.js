var gulp   = require('gulp');

gulp.task('watch', function() {

	// watch for changes to html
	gulp.watch([
		'html/*.html'
	], ['html']);
	gulp.watch([
		'js/*.js'
	], ['html']);

	// watch for changes to sass
	gulp.watch([
		'dest/*',
	], ['sass']);

});