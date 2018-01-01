const gulp = require('gulp'),
babel = require('gulp-babel'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
shell = require('gulp-shell'),
plumber = require('gulp-plumber'),
browserSync = require('browser-sync').create(),
iife = require('gulp-iife'),
coffee = require('gulp-coffee');

const proj = {
   scripts: ['./scripts/*.coffee' ],
   src: 'flexr.min.js',
   port: 4000
}

gulp.task('scripts', () => {
   return gulp.src(proj.scripts)
   .pipe(plumber())
   .pipe(concat(proj.src))
   .pipe(coffee({bare:true}))
   .pipe(iife({prependSemicolon:false, useStrict:false, params: ["init"], args: ["document.body.id"]}))
   .pipe(babel({presets: ['env']}))
   .pipe(uglify())
   .pipe(gulp.dest('./dist/'))
   .pipe(gulp.dest('./_site/dist/'));
});

gulp.task('wait', ['scripts'], done => {
   done();
   browserSync.reload();
});

gulp.task('watch', () => gulp.watch(proj.scripts, ['scripts']));

gulp.task('lookout', () => gulp.watch(proj.scripts, ['wait']));

gulp.task('sync', () => {
   browserSync.init({
      server: {baseDir:'./_site/'},
      host: "localhost",
      port: proj.port,
      open: false
   });
   browserSync.watch(['./_site/*', '!./_site/**/*.coffee']).on('change', browserSync.reload);
});

gulp.task('serve', shell.task('jekyll serve'));

gulp.task('auto', ['serve', 'scripts', 'sync', 'lookout']);

gulp.task('default', ['serve', 'scripts', 'watch']);

// Emergency kill if Plumber fails
gulp.task('kill', shell.task(`kill -9 $(lsof -t -i:${proj.port})`));
