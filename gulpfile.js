const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const vendors = require('./gulp/tasks/vendors');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const html = require('./gulp/tasks/html');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');

const dev = gulp.parallel(html, script, vendors, styles, imageMinify, spriteSVG, spritePNG, fonts);

exports.default = gulp.series(
  clean,
  dev,
  serve
);


// gulp-file-include
// webp to html
// ttf 2 woff

/*
const fileinclude = require("gulp-file-include");

  const replace = require('gulp-replace');

  const concat = require('gulp-concat');

  const notify = require("gulp-notify");
  const htmlbeautify = require("gulp-html-beautify");
  const fs = require("fs");
  const gcmq = require("gulp-group-css-media-queries");

  const watch = require("gulp-watch");
  const htmlclean = require("gulp-htmlclean");
  const rev = require("gulp-rev");

  const group_media = require("gulp-group-css-media-queries");
  const clean_css = require("gulp-clean-css");

  from fls
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
