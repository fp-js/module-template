var gulp = require('gulp'),
  watch = require('gulp-watch'),
  jasmine = require('gulp-jasmine'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  to5 = require('gulp-6to5');

gulp.task('6to5', function() {
  return gulp.src('**/*.es6')
    .pipe(sourcemaps.init())
    .pipe(to5({
      experimental: true
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({
      extname: '.js'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('test', ['6to5'], function() {
  return gulp.src('test.js')
    .pipe(jasmine());
});

gulp.task('default', ['test'], function() {
  gulp.watch('**/*.es6', ['test']);
});
