/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
casper
  .then(() => {
    return phantomcss.compareAll();
  })
  .then(() => {
    return casper.test.done();
  })
  .run(() => {
    return phantom.exit(phantomcss.getExitStatus());
  });
