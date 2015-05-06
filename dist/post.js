/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
"use strict";

casper.then(function () {
  return phantomcss.compareAll();
}).then(function () {
  return casper.test.done();
}).run(function () {
  return phantom.exit(phantomcss.getExitStatus());
});