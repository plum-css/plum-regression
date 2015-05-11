'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

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

var _node_modulesPhantomcssPhantomcssJs = require('node_modules/phantomcss/phantomcss.js');

var phantomcss = _interopRequireWildcard(_node_modulesPhantomcssPhantomcssJs);

casper.configure = function configure(path) {
  phantomcss.update({
    screenshotRoot: _fs2['default'].absolute('' + _fs2['default'].workingDirectory + '/' + path + '/tests/baselines')
  });

  return this;
};