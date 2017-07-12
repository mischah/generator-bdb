import gulp from 'gulp';
import sequence from 'run-sequence';
import requireDir from 'require-dir';
import project from './project.js';

requireDir('./tasks/'+project+'/prod');
requireDir('./tasks/'+project+'/dev');

/*
=============================
Webpack - Template
-----------------------------
*/

gulp.task('wp', () => {
    sequence('clean:dev',
        [
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            'webpack:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});

gulp.task('wp:build', () => {
    sequence('clean:prod',
        [
            // 'audio:prod',
            'libs:prod',
            'sass:prod',
            'css:prod',
            'data:prod',
            'img:prod',
            // 'js:prod'
            'webpack:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});

export default project;