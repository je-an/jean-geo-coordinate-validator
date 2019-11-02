## Description

Validates geographical coordinates (latitude, longitude)

## Support
Supports both CommonJS and AMD eco system. If there is no loader, GeoCoordinateValidator is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new GeoCoordinateValidator();
```
- Use it with require.js
```js
require(["path/to/GeoCoordinateValidator"], function(GeoCoordinateValidator){
    // Work with GeoCoordinateValidator
});
```
- Use it with node.js
```js
var GeoCoordinateValidator = require("jean-geo-coordinate-validator");
```
## Installation

`npm install jean-geo-coordinate-validator --save --legacy-bundling`

## API Reference

TBD

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT