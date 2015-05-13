'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
var phantomcss = require(casper.cli.get('phantom') + '/phantomcss.js');

casper.configure = function configure(path) {
  phantomcss.update({
    screenshotRoot: '' + casper.cli.get('root') + '/' + path + '/tests/baselines'
  });

  return this;
};

casper.load = function (file) {
  return casper.start('' + casper.cli.get('fixtures') + '/' + file);
};