# plum-regression [![Build Status](https://travis-ci.org/plum-css/plum-regression.png?branch=master)](https://travis-ci.org/plum-css/plum-regression)

> Run visual regression test suites against plum stylesheets using [CasperJS](http://casperjs.org/) & [PhantomCSS](https://github.com/Huddle/PhantomCSS).


## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save plum-regression`


## Usage

```javascript
var regression = require('plum-regression');

var options = {
  root: 'path/to/stylesheets',
  tests: [ 'modules/', 'units/', 'pages/' ],
  fixtures: 'path/to/fixtures',
  results: 'path/to/save/results/to',
  failures: 'path/to/save/failures/to'
};

regression(options, function(err, response) {
  if (err) {
    return err;
  }
  return response;
});
```


## API

### regression( options )

Name                | Type     | Argument     | Description
--------------------|----------|--------------|------------
options.root        | `string` | `<required>` | the path to your plum stylesheets.
options.tests       | `array`  | `<required>` | files and/or directories containing the tests to run.
options.fixtures    | `string` | `<required>` | the path containing the test fixtures to use.
options.results     | `string` | `<required>` | the path to save the test results to.
options.failures    | `string` | `<required>` | the path to save the test failures to.

#### callback( error, response )

Name     | Type       | Argument     | Description
---------|------------|--------------|------------
error    | `error`    | `<required>` | any errors that may have occured.
response | `string`   | `<required>` | success message.


## Developing

[plum-regression](https://github.com/plum-css/plum-regression) is built using **ES6**. Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)  
Licensed under the MIT license.
