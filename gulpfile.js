'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    wrapper = require('gulp-wrapper'),
    templateCache = require('gulp-angular-templatecache'),
    angularHtmlify = require('gulp-angular-htmlify'),
    angularFilesort = require('gulp-angular-filesort'),
    ngAnnotate = require('gulp-ng-annotate'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('lint', function() {
  return gulp.src('angular-app/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('compile-js', function() {
  return gulp.src(['angular-app/**/*.js', 'tmp/templates.js'])
      .pipe(angularFilesort())
      .pipe(concat('application.js'))
      .pipe(ngAnnotate({
        add: true,
        single_quotes: true
      }))
      .pipe(wrapper({
        header: '(function(window, document) {\n',
        footer: '\n})(window, document);'
      }))
      .pipe(gulp.dest('dist'))
      .pipe(rename('application.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'))
      .pipe(notify('Javascript compilation completed successfully'));
});

gulp.task('compile-templates', function() {
  return gulp.src('angular-app/**/*.html')
      .pipe(angularHtmlify({
        verbose: false,
        customPrefixes: ['sf-']
      }))
      .pipe(templateCache('templates.js', {
        module: 'CreateGroupTabApp'
      }))
      .pipe(gulp.dest('tmp'))
      .pipe(notify('Angular template compilation completed successfully'));
});

gulp.task('sass', function() {
  return gulp.src('angular-app/**/*.scss')
      .pipe(sass())
      .pipe(concat('application.css'))
      .pipe(gulp.dest('dist'))
      .pipe(notify('SASS compilation completed successfully'));
});

gulp.task('watch', function() {
  gulp.watch('angular-app/**/*.html', ['compile-templates']);
  gulp.watch(['angular-app/**/*.js', 'tmp/templates.js'], ['lint', 'compile-js']);
  gulp.watch('angular-app/**/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'compile-templates', 'compile-js', 'sass', 'watch']);
