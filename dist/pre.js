/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
'use strict';

phantomcss.init({
  rebase: casper.cli.get('rebase'),
  casper: casper,
  libraryRoot: casper.cli.get('phantom'),
  comparisonResultRoot: casper.cli.get('results'),
  failedComparisonsRoot: casper.cli.get('failures'),
  fileNameGetter: function fileNameGetter(root, filename) {
    var name = '' + root + '/' + filename.replace(/\W+/g, '-').toLowerCase();
    var base = '' + name + '.png';
    var diff = '' + name + '.diff.png';

    return fs.isFile(base) ? diff : base;
  }
});

casper.start();
casper.test.done();