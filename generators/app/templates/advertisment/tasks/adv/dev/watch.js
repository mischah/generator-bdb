import config from '../../config.js';
import gulp from 'gulp';
// var browserSync = require('browser-sync').create();
import reload from './serve.js';
// var reload = browserSync.reload;

gulp.task('watch', () => {
	gulp.watch(config.paths.src.root + '**/*.css', ['css:dev']).on("change", reload);
	gulp.watch(config.paths.src.root + '**/*.scss', ['sass:dev']).on("change", reload);
    gulp.watch(config.paths.src.js + '**/*.js', ['js:dev']).on("change", reload);
    gulp.watch(config.paths.src.img, ['img:dev']);
    gulp.watch(config.paths.src.data, ['data:dev']);
    gulp.watch(config.paths.src.audio, ['audio:dev']);
    gulp.watch(config.paths.src.root + '**/*.html', ['html:dev']).on("change", reload);
});
