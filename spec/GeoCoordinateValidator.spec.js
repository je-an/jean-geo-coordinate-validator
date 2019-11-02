// jscs:disable
// jshint ignore:start
define([
    "GeoCoordinateValidator"
], function (GeoCoordinateValidator) {
    describe("GeoCoordinateValidator.spec.js", function () {
        describe("GeoCoordinateValidator.isCoordinateValid", function () {
            describe("Validates successfully,", function () {
                it("if coordinate longitude and latitude are numbers", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: 0 })).toBe(true);
                });
                it("if coordinate longitude is in range of -180° to 180°", function () {
                    for (var i = 0; i < 180; i++) {
                        expect(GeoCoordinateValidator.isCoordinateValid({ longitude: i, latitude: 0 })).toBe(true);
                    }
                    for (var i = -180; i === 0; i++) {
                        expect(GeoCoordinateValidator.isCoordinateValid({ longitude: i, latitude: 0 })).toBe(true);
                    }
                });
                it("if coordinate longitude is exactly -180°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: -180, latitude: 0 })).toBe(true);
                });
                it("if coordinate longitude is exactly 180°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 180, latitude: 0 })).toBe(true);
                });
                it("if coordinate latitude is in range of -90° to 90°", function () {
                    for (var i = 0; i < 90; i++) {
                        expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: i })).toBe(true);
                    }
                    for (var i = -90; i === 0; i++) {
                        expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: i })).toBe(true);
                    }
                });
                it("if coordinate latitude is exactly -90°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: -90 })).toBe(true);
                });
                it("if coordinate latitude is exactly 90°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: 90 })).toBe(true);
                });
            });
            describe("returns false, ", function () {
                it("if coordinate longitude and latitude are not numbers", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: "1", latitude: "1" })).toBe(false);
                });
                it("if coordinate longitude is > 180°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 181, latitude: 0 })).toBe(false);
                });
                it("if coordinate longitude is < -180°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: -181, latitude: 0 })).toBe(false);
                });
                it("if coordinate latitude is > 90°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: 91 })).toBe(false);
                });
                it("if coordinate latitude is < -90°", function () {
                    expect(GeoCoordinateValidator.isCoordinateValid({ longitude: 0, latitude: -91 })).toBe(false);
                });
            });
        });
        describe("GeoCoordinateValidator.isLongitudeValid", function () {
            describe("Validates successfully,", function () {
                it("if value is a number", function () {
                    expect(GeoCoordinateValidator.isLongitudeValid(0)).toBe(true);
                });
                it("if value is in range of -180° to 180°", function () {
                    for (var i = 0; i < 180; i++) {
                        expect(GeoCoordinateValidator.isLongitudeValid(i)).toBe(true);
                    }
                    for (var i = -180; i === 0; i++) {
                        expect(GeoCoordinateValidator.isLongitudeValid(i)).toBe(true);
                    }
                });
                it("if value is exactly -180°", function () {
                    expect(GeoCoordinateValidator.isLongitudeValid(-180)).toBe(true);
                });
                it("if value is exactly 180°", function () {
                    expect(GeoCoordinateValidator.isLongitudeValid(180)).toBe(true);
                });
            });
            describe("Returns false, ", function () {
                it("if value is not a number", function () {
                    expect(GeoCoordinateValidator.isLongitudeValid("180")).toBe(false);
                });
                it("if value is > 180°", function () {
                    expect(GeoCoordinateValidator.isLongitudeValid(181)).toBe(false);
                });
                it("if value is < -180°", function () {
                    expect(GeoCoordinateValidator.isLongitudeValid(-181)).toBe(false);
                });
            });
        });
        describe("GeoCoordinateValidator.isLatitudeValid", function () {
            describe("Validates successfully,", function () {
                it("if value is a number", function () {
                    expect(GeoCoordinateValidator.isLatitudeValid(0)).toBe(true);
                });
                it("if value is in range of -90° to 90°", function () {
                    for (var i = 0; i < 90; i++) {
                        expect(GeoCoordinateValidator.isLatitudeValid(i)).toBe(true);
                    }
                    for (var i = -90; i === 0; i++) {
                        expect(GeoCoordinateValidator.isLatitudeValid(i)).toBe(true);
                    }
                });
                it("if value is exactly -90°", function () {
                    expect(GeoCoordinateValidator.isLatitudeValid(-90)).toBe(true);
                });
                it("if value is exactly 90°", function () {
                    expect(GeoCoordinateValidator.isLatitudeValid(90)).toBe(true);
                });
            });
            describe("Returns false, ", function () {
                it("if value is not a number", function () {
                    expect(GeoCoordinateValidator.isLatitudeValid("91")).toBe(false);
                });
                it("if value is > 90°", function () {
                    expect(GeoCoordinateValidator.isLatitudeValid(91)).toBe(false);
                });
                it("if value is < -90°", function () {
                    expect(GeoCoordinateValidator.isLatitudeValid(-91)).toBe(false);
                });
            });
        });
    });
});

