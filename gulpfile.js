const gulp = require('gulp'),
babel = require('gulp-babel'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
shell = require('gulp-shell'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync').create();

gulp.task('scripts', () => {
  return gulp.src(['./js/*.js' ])
    .pipe(plumber())
    .pipe(concat('dbd.min.js'))
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./_site/dist/'));
});

gulp.task('wait', ['scripts'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', () => gulp.watch('./js/*.js', ['wait']));

gulp.task('sync', () => {
   browserSync.init({server:{baseDir:'./_site/'}});
   gulp.watch('./_site/*').on('change', browserSync.reload);
});

gulp.task('serve', shell.task('jekyll serve'));

gulp.task('default', ['serve', 'scripts', 'sync', 'watch']);

// Emergency kill if Plumber fails
gulp.task('kill', shell.task(`kill -9 $(lsof -t -i:4000)`));
