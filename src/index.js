/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import fs from 'fs';
import path from 'path';
import phantomcss from 'phantomcss';
import casper from 'casper';
import { exec } from 'child_process';


/*
 * Runs CasperJS / PhantomCSS regressions tests.
 *
 * @param {object.string} options.stylesheets - the base plum stylesheets directory.
 * @param {object.array}  options.tests - array of files and/or directories where the tests are located.
 * @param {object.string} options.fixtures - path of the fixtures to use for the tests.
 * @param {object.string} options.results - path where the results should be stored.
 * @param {object.string} options.failures - path where the failures should be stored.
 * @param {function}      callback         - callback method thats executed after the test command has been run.
 */
let runner = ({stylesheets, tests, fixtures, results, failures}, cb) => {
  let files   = tests.join(' ');
  let phantom = path.join(__dirname, '..', 'node_modules/phantomcss');
  let command = `casperjs test ${tests} --verbose --pre=${__dirname}/pre.js --includes=${__dirname}/includes.js --post=${__dirname}/post.js --stylesheets=${stylesheets} --tests=${files} --fixtures=${fixtures} --results=${results} --failures=${failures} --phantom=${phantom}`;

  exec(command, (err, stdout, stderr) => {
    cb(null, stdout);
  });
}

export default runner;
