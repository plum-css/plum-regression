'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _phantomcss = require('phantomcss');

var _phantomcss2 = _interopRequireDefault(_phantomcss);

var _casper = require('casper');

var _casper2 = _interopRequireDefault(_casper);

var _child_process = require('child_process');

/*
 * Runs CasperJS / PhantomCSS regressions tests.
 *
 * @param {object.string} options.stylesheets - the base plum stylesheets directory.
 * @param {object.array}  options.tests - array of files and/or directories where the tests are located.
 * @param {object.string} options.fixtures - path of the fixtures to use for the tests.
 * @param {object.string} options.results - path where the results should be stored.
 * @param {object.string} options.failures - path where the failures should be stored.
 * @param {function}      callback         - callback method thats executed after the test command has been run.
 */
var runner = function runner(_ref, cb) {
  var stylesheets = _ref.stylesheets;
  var tests = _ref.tests;
  var fixtures = _ref.fixtures;
  var results = _ref.results;
  var failures = _ref.failures;

  var files = tests.join(' ');
  var phantom = _path2['default'].join(__dirname, '..', 'node_modules/phantomcss');
  var command = 'casperjs test ' + files + ' --verbose --pre=' + __dirname + '/pre.js --includes=' + __dirname + '/includes.js --post=' + __dirname + '/post.js --stylesheets=' + stylesheets + ' --tests=' + files + ' --fixtures=' + fixtures + ' --results=' + results + ' --failures=' + failures + ' --phantom=' + phantom;

  _child_process.exec(command, function (err, stdout, stderr) {
    if (err) {
      return cb(stdout);
    }
    return cb(null, stdout);
  });
};

exports['default'] = runner;
module.exports = exports['default'];