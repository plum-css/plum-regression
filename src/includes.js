/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
var phantomcss = require( casper.cli.get('phantom') + '/phantomcss.js' );

import fs from 'fs';

casper.loadPath = function configure(path) {
  phantomcss.update({
    screenshotRoot: `${casper.cli.get('stylesheets')}/${path}/tests/baselines`
  });

  return this;
};

casper.loadFixture = function(file) {
  return casper.start(`${casper.cli.get('fixtures')}/${file}.html`);
};
