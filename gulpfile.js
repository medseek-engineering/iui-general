var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var minjs = require('gulp-uglify');
var rename = require('gulp-rename');
var ngHtml2Js = require('gulp-ng-html2js');
var karma = require('karma').server;
var jshint = require('gulp-jshint');
var express = require('express');

// Defining Files
var base = './lib/';
var destination = './lib/dist';
var templateFiles = './lib/**/*.html';
var templateFile = 'iui-general-templates.js';
var jsFilesCombined = [
  './lib/iui-general-module-header.js',
  './lib/services/*.js',
  './lib/filters/*.js',
  './lib/directives/*.js'
];
var additionalLintFiles = [
  './lib/dist/core-module-setup.js',
  './test/**/*.test.js',
  './gulpfile.js'
];

gulp.task('lint', function () {
  'use strict';
  var lintFiles = jsFilesCombined.concat(additionalLintFiles);
  return gulp.src(lintFiles, {base: base})
    .pipe(jshint('./config/.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});


gulp.task('test', ['lint'], function (done) {
  'use strict';
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});


gulp.task('createTemplates', ['test'], function(cb){
  'use strict';
  gulp.src(templateFiles)
    .pipe(ngHtml2Js({
      base: base,
      moduleName: 'iui.generalTemplates',
      prefix: '/$iui-general/'
    }))
    .pipe(gulpConcat(templateFile))
    .pipe(gulp.dest(destination))
    .on('end', cb);
});

gulp.task('combineFiles', ['createTemplates'], function(){
  'use strict';
  // combine and minify JS
  var templateWithDestination = destination+'/'+templateFile;
  jsFilesCombined.push(templateWithDestination);
  gulp.src(jsFilesCombined, {base: base})
    .pipe(gulpConcat('iui-general.js'))
    .pipe(gulp.dest(destination))
    .pipe(rename('iui-general.min.js'))
    .pipe(minjs())
    .pipe(gulp.dest(destination));
});

gulp.task('serve', function() {
  'use strict';
  var app = express();
  app.use('/', express.static(__dirname + '/'));
  app.listen(4321, function() { console.log('styleGuide listening'); });
});

gulp.task('default', ['lint', 'test', 'createTemplates', 'combineFiles']);