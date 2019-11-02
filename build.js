({
    baseUrl: '.',
    out: 'dist/jean-geo-coordinate-validator.js',
    optimize: 'uglify2',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/GeoCoordinateValidator"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else if(typeof module === 'object' && module.exports) { \n" +
        "\t\t module.exports = factory(); \n " +
        "\t} else { \n" +
        "\t \troot.GeoCoordinateValidator = root.GeoCoordinateValidator || {}; \n" +
        "\t \troot.GeoCoordinateValidator = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/GeoCoordinateValidator'); \n" +
        "}));"
    },
     paths:{
       TypeCheck: "node_modules/jean-type-check/src/TypeCheck"
    },
    stubModules: ["css", "text", "normalize", "css-builder"]
})