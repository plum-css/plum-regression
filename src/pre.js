/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
phantomcss.init({
  rebase: casper.cli.get('rebase'),
  casper: casper,
  libraryRoot: fs.absolute(`${fs.workingDirectory}/node_modules/phantomcss`),
  comparisonResultRoot: './.tmp/results',
  failedComparisonsRoot: './.tmp/failures',
  fileNameGetter(root, filename) {
    let name = `${root}/${filename.replace(/\W+/g, '-').toLowerCase()}`;
    let base = `${name}.png`;
    let diff = `${name}.diff.png`;

    return fs.isFile(base) ? diff : base;
  }
});

casper.start();
casper.test.done();
