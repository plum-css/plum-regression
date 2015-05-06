/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import fs from 'fs';
import * as phantomcss from 'node_modules/phantomcss/phantomcss.js';

casper.configure = function configure(path) {
  phantomcss.update({
    screenshotRoot: fs.absolute(`${fs.workingDirectory}/${path}/tests/baselines`),
    comparisonResultRoot: fs.absolute(`${fs.workingDirectory}/${path}/tests/results`)
  })

  return this;
};
