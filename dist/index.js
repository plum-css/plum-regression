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

var _phantomcss = require('phantomcss');

var _phantomcss2 = _interopRequireDefault(_phantomcss);

var _casper = require('casper');

var _casper2 = _interopRequireDefault(_casper);

var _child_process = require('child_process');

var runner = function runner(_ref, cb) {
  var files = _ref.files;

  var tests = files.join(' ');
  var command = 'casperjs test ' + tests + ' --verbose --pre=' + __dirname + '/pre.js --includes=' + __dirname + '/includes.js --post=' + __dirname + '/post.js';

  _child_process.exec(command, function (err, stdout, stderr) {
    cb(null, stdout);
  });
};

exports['default'] = runner;
module.exports = exports['default'];