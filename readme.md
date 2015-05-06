# plum-regression [![Build Status](https://travis-ci.org/plum-css/plum-regression.png?branch=master)](https://travis-ci.org/plum-css/plum-regression)

> Run visual regression test suites against plum stylesheets.

## Getting Started

- Install with [NPM](https://www.npmjs.org/) - `npm install --save plum-regression`


## Usage

```javascript
var regression = require('plum-regression');

var options = {
  files: [ 'modules/', 'units/', 'pages/' ]
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
options.files       | `array`  | `<required>` | files and/or directories of stylesheets to parse.

#### callback( error, response )

Name     | Type       | Argument     | Description
---------|------------|--------------|------------
error    | `error`    | `<required>` | any errors that may have occured.
response | `string`   | `<required>` | success message.


## Developing

plum-regression is built using **ES6** and compiled using [Babel](http://babeljs.io/). Run the following task to compile the `src/` into `dist/`.

```bash
npm run build
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License
Copyright (c) 2015 [Jason Bellamy ](http://jasonbellamy.com)
Licensed under the MIT license.ggw
