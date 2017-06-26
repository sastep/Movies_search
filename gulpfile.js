'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const rev = require('gulp-rev');

gulp.task('status', () => {
  console.log('Gulp started');
});

gulp.task('sass', () => {
  if(process.env.NODE_ENV === 'production') {
    return gulp.src('./scss/**/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rev())
      .pipe(gulp.dest('./www/css'));
  } else {
    return gulp.src('./scss/**/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(cleanCSS({compatibility: 'ie7'}))
      .pipe(gulp.dest('./www/css'));
  }
});

gulp.task('sass:watch', () => {
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('images', () =>
  gulp.src('dist/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
);

gulp.task('start', [ 'status', 'sass', 'sass:watch']);
