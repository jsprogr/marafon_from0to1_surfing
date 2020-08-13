let gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  uglify = require("gulp-uglify"),
  concat = require("gulp-concat"), //!!!
  rename = require("gulp-rename"), //!!!
  del = require("del"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("clean", async function () {
  del.sync("dist");
});

gulp.task("scss", function () {
  return gulp
    .src("app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 8 versions"],
      })
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css", function () {
  return gulp
    .src([
      "node_modules/normalize.css/normalize.css",
      "node_modules/slick-carousel/slick/slick.css",
      "node_modules/animate.css/animate.css",
    ])
    .pipe(concat("_libs.scss"))
    .pipe(gulp.dest("app/scss"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("html", function () {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function () {
  return gulp.src("app/js/*.js").pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", function () {
  return gulp
    .src([
      "node_modules/slick-carousel/slick/slick.js",
      "node_modules/wow.js/dist/wow.js",
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
});

gulp.task("export", function () {
  let buildHtml = gulp.src("app/**/*.html").pipe(gulp.dest("dist"));

  let BuildCss = gulp.src("app/css/**/*.css").pipe(gulp.dest("dist/css"));

  let BuildJs = gulp.src("app/js/**/*.js").pipe(gulp.dest("dist/js"));

  let BuildFonts = gulp.src("app/fonts/**/*.*").pipe(gulp.dest("dist/fonts"));

  let BuildImg = gulp.src("app/img/**/*.*").pipe(gulp.dest("dist/img"));
});

gulp.task("watch", function () {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/*.html", gulp.parallel("html"));
  gulp.watch("app/js/*.js", gulp.parallel("script"));
});

gulp.task("build", gulp.series("clean", "export"));

gulp.task(
  "default",
  gulp.parallel("css", "scss", "js", "browser-sync", "watch")
);


// ______________________________ gulp-file-include ------------------------------
/*
  const del = require('del');
  const babel = require('gulp-babel');
  const uglify = require('gulp-uglify');
  const eslint = require('gulp-eslint');
  const argv = require('yargs').argv;
  const gulpif = require('gulp-if');
  const buffer = require('vinyl-buffer');
  const imagemin = require('gulp-imagemin');
  const merge = require('merge-stream');
  const htmlValidator = require('gulp-w3c-html-validator');
  const plumber = require('gulp-plumber');

  const svgSprite = require('gulp-svg-sprite');
  const svgmin = require('gulp-svgmin');
  const cheerio = require('gulp-cheerio');
  const replace = require('gulp-replace');

  const cleanCSS = require('gulp-clean-css');
  const sourcemaps = require('gulp-sourcemaps');
  const autoprefixer = require('gulp-autoprefixer');

  const concat = require('gulp-concat');

  const notify = require("gulp-notify");
  const htmlbeautify = require("gulp-html-beautify");
  const fs = require("fs");

  const sass = require("gulp-sass");
  const sassGlob = require("gulp-sass-glob");
  const gcmq = require("gulp-group-css-media-queries");

  const watch = require("gulp-watch");

  const usemin = require("gulp-usemin");
  const htmlclean = require("gulp-htmlclean");
  const rev = require("gulp-rev");
  const minifyCss = require("gulp-minify-css");
  const uglify = require("gulp-uglify");

  const fileinclude = require("gulp-file-include");
  const group_media = require("gulp-group-css-media-queries");
  const clean_css = require("gulp-clean-css");

  const rename = require("gulp-rename");
  const uglify = require("gulp-uglify-es").default;
  const webp = require('gulp-webp');
  const webphtml = require('gulp-webp-html');
  const webpcss = require("gulp-webpcss");
  const svgSprite = require('gulp-svg-sprite');
  const ttf2woff = require('gulp-ttf2woff');
  const ttf2woff2 = require('gulp-ttf2woff2');
  const fonter = require('gulp-fonter');
*/
