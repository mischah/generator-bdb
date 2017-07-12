import gulp from 'gulp';
import sequence from 'run-sequence';
import requireDir from 'require-dir';
import project from './project.js';

requireDir('./tasks/'+project+'/prod');
requireDir('./tasks/'+project+'/dev');

/*
=============================
ADV - Template
-----------------------------
*/

gulp.task('default', () => {
    sequence('clean:dev',
        [
            'libs:dev',
            'sass:dev',
            'css:dev',
            'data:dev',
            'img:dev',
            'js:dev',
            'html:dev',
            'mani:dev'
        ],
        'watch',
        'serve'
    );
});


gulp.task('build', () => {
    sequence('clean:prod',
        [
            'libs:prod',
            'sass:prod',
            'css:prod',
            'data:prod',
            'img:prod',
            'js:prod'
        ],
        'html:prod',
        'rev:prod'
    );
});

export default project;