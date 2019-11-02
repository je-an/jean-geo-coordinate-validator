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
    // valid
    var valid = { longitude: 95, latitude: 35 },
        invalid = { longitude: 185, latitude: 95};

    GeoCoordinateValidator.isCoordinateValid(valid);   // true
    GeoCoordinateValidator.isCoordinateValid(invalid); // false
});
```
- Use it with node.js
```js
var GeoCoordinateValidator = require("jean-geo-coordinate-validator");
```
## Installation

`npm install jean-geo-coordinate-validator --save --legacy-bundling`

## API Reference

### GeoCoordinateValidator.isCoordinateValid(coordinate) 

Validates a geographical coordinate

**Parameters**
- **coordinate**: `Object` - coordinate object
- **coordinate.latitude**: `Number` - longitude value
- **coordinate.longitude**: `Number` - latitude value

**Returns**
- `Boolean` - True if coordinate is valid, false otherwise

### GeoCoordinateValidator.isLongitudeValid(longitude) 

Validates longitude value

**Parameters**
- **longitude**: `Number` - longitude value

**Returns**
- `Boolean` - True if longitude is valid, false otherwise

### GeoCoordinateValidator.isLatitudeValid(latitude) 

Validates latitude value

**Parameters**
- **latitude**: `Number` - latitude value

**Returns**
- `Boolean` - True if latitude is valid, false otherwise

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT