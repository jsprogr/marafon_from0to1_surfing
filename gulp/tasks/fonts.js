const gulp = require('gulp');

// Копируем все шрифты из папки dev в dist

module.exports = function fonts() {
  return gulp.src('app/static/fonts/**/*.*')
    .pipe(gulp.dest('dist/static/fonts'))
};
