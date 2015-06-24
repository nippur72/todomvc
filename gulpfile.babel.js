import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('serve', () => {
	browserSync({
		server: './',
		baseDir: "./",
		notify: false
	});

	gulp.watch(['elements/*.{html,css}', '*.html'], browserSync.reload);
});
