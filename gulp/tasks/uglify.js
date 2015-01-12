var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  gulp.src('js/code.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest'))
});