/**
 * plum-regression
 * https://github.com/plum-css/plum-regression
 *
 * Copyright (c) 2015 Jason Bellamy
 * Licensed under the MIT license.
 */
import fs from 'fs';
import phantomcss from 'phantomcss';
import casper from 'casper';
import { exec } from 'child_process';

let runner = ({files}, cb) => {
  let tests   = files.join(' ');
  let command = `casperjs test ${tests} --verbose --pre=${__dirname}/pre.js --includes=${__dirname}/includes.js --post=${__dirname}/post.js`;

  exec(command, (err, stdout) => {
    if (err) return cb(err);
    cb(null, stdout);
  });
}

export default runner;
