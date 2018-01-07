const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const modRewrite = require('connect-modrewrite');

const scripts = require('./scripts');
const styles = require('./styles');

var devMode = false;

gulp.task('sass', function() {
    gulp.src(styles)
        .pipe(concat('main.scss'))
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', function() {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/controllers'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function() {
    gulp.start(['sass', 'js', 'html'])
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        open: false,
        startPath: '/index.html',
        server: {
            baseDir: 'dist',
            middleware: [
                // proxyMiddleware,
                modRewrite([
                    '!\\.\\w+$ /index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('start', function() {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./src/styles/**/*.scss'], ['sass']);
    gulp.watch(['./src/**/*.js'], ['js']);
    gulp.watch(['./src/**/*.html'], ['html']);
});
