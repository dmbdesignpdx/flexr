const gulp = require('gulp'),
babel = require('gulp-babel'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
shell = require('gulp-shell'),
plumber = require('gulp-plumber'),
port = 4000;

gulp.task('scripts', () => {
  gulp.src(['./js/*.js' ])
    .pipe(plumber())
    .pipe(concat('flexr.min.js'))
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./_site/dist/'));
});

gulp.task('watch', () => gulp.watch('./js/*.js', ['scripts']));

gulp.task('serve', shell.task('jekyll serve'));

gulp.task('kill', shell.task(`kill -9 $(lsof -t -i:${port})`));

gulp.task('default', ['serve', 'scripts', 'watch']);
