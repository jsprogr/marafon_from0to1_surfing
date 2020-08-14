const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const fileinclude = require('gulp-file-include');


module.exports = function html() {
  return gulp.src('app/html/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulpif(argv.prod, htmlValidator()))
    .pipe(gulp.dest('dist'))
};
