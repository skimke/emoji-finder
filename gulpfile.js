var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var sass_src = '_/scss/*.scss';
var sass_build = '.';

gulp.task('sass', function (){
	gulp.src(sass_src)
		.pipe(sass({
			outputStyle: 'compact'
		}))
		.pipe(prefix(
			"last 1 version", "> 1%"
		))
		.pipe(gulp.dest(sass_build));
});

gulp.task('default', function() {
	gulp.watch(sass_src, ['sass']);
});
