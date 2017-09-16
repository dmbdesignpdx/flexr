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
   .pipe(concat('flexr.min.js'))
   .pipe(babel({presets: ['es2015']}))
   .pipe(uglify())
   .pipe(gulp.dest('./dist/'))
   .pipe(gulp.dest('./_site/dist/'));
});

gulp.task('wait', ['scripts'], done => {
   done();
   browserSync.reload();
});

gulp.task('watch', () => gulp.watch('./js/*.js', ['wait']));

gulp.task('lookout', () => {
   gulp.watch('./js/*.js', ['wait']);
   browserSync.watch('./_site/*').on('change', browserSync.reload);
});

gulp.task('sync', () => {
   browserSync.init({
      server: {baseDir:'./_site/'},
      port: 4000,
      open: false
   });
});

gulp.task('serve', shell.task('jekyll serve'));

gulp.task('auto', ['serve', 'scripts', 'sync', 'lookout']);

gulp.task('default', ['serve', 'scripts', 'watch']);

// Emergency kill if Plumber fails
gulp.task('kill', shell.task(`kill -9 $(lsof -t -i:4000)`));
