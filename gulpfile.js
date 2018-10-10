var gulp = require('gulp');
var sass = require('gulp-sass');
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	gulp.src('./**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer ({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest(''));
}) ;

gulp.task('sass:watch', function() {
	gulp.watch('./**/*.sass', ['sass']);
}) ;
