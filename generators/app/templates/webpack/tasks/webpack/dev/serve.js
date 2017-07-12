import gulp from 'gulp';
import config from '../../config.js';
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// gulp.task('serve', () => {
//     browserSync({
//         server: {
//             baseDir: config.paths.builds.dev.root,
//             routes: {
//                 "/bower_components": "bower_components"
//             }
//         }
//     });
// });


gulp.task('serve', () => {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: config.paths.builds.dev.root
        },
        reloadDelay: 300
    });
});



export default reload;