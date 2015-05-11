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
  libraryRoot: fs.absolute('' + fs.workingDirectory + '/node_modules/phantomcss'),
  comparisonResultRoot: './.tmp/results',
  failedComparisonsRoot: './.tmp/failures',
  fileNameGetter: function fileNameGetter(root, filename) {
    var name = '' + root + '/' + filename.replace(/\W+/g, '-').toLowerCase();
    var base = '' + name + '.png';
    var diff = '' + name + '.diff.png';

    return fs.isFile(base) ? diff : base;
  }
});

casper.start();
casper.test.done();