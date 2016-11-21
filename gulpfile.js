var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
/*
var jshint = require('gulp-jshint');
*/

var paths = {
  sass: ['./scss/**/*.scss'],
  css: ['./app/**/*.css'],
  js: ['./app/**/*.module.js', './app/**/*.config.js', './app/**/*.js', '!./app/lib/**/*'],
  misc: ['./app/**/*', './app/**/*.js', './app/lib/**/*', './app/**/*.html']
};

gulp.task('default', ['babel', 'sass']);

gulp.task('copy', function () {
  return gulp.src(paths.misc)
        .pipe(gulp.dest('www'));
});

gulp.task('babel', function () {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('www/js'));
});


gulp.task('sass', function (done) {
  gulp.src(['./scss/ionic.app.scss', './app/**/*.scss'])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

/*gulp.task('lint', function () {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});*/

gulp.task('watch', ['babel', 'sass', 'copy'], function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['babel']);
  gulp.watch(paths.misc, ['copy']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
