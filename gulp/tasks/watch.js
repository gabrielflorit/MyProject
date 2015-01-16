var gulp   = require('gulp');

gulp.task('watch', function() {

	// watch for changes to html
	gulp.watch([
		'html/*'
	], ['html']);
	gulp.watch([
		'*.html'
	], ['html']);
	gulp.watch([
		'js/*'
	], ['html']);
	gulp.watch([
		'css/*'
	], ['html']);


	// watch for changes to sass
	gulp.watch([
		'css/*',
	], ['sass']);

});