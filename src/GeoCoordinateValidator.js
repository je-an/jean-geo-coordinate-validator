define(["TypeCheck"], function (TypeCheck) {
    /**
     * Validates geographical coordinates (latitude, longitude) 
     * @alias GeoCoordinateValidator 
     */
    return {
        /** 
         * Validates a geographical coordinate
         * @param {Object} c - coordinate object
         * @param {Number} c.longitude - longitude value
         * @param {Number} c.latitude - latitude value
         * @returns {Boolean} - True if coordinate is valid, false otherwise
         */
        isCoordinateValid: function (c) {
            return this.isLongitudeValid(c.longitude) && this.isLatitudeValid(c.latitude);
        },
        /** 
         * Validates longitude value
         * @param {Number} longitude - longitude value
         * @returns {Boolean} - True if longitude value is valid, false otherwise
         */
        isLongitudeValid: function (longitude) {
            return TypeCheck.isNumber(longitude) && longitude <= 180 && longitude >= -180;
        },
        /** 
         * Validates latitude value
         * @param {Number} latitude - latitude value 
         * @returns {Boolean} - True if latitude value is valid, false otherwise
         */
        isLatitudeValid: function (latitude) {
            return TypeCheck.isNumber(latitude) && latitude <= 90 && latitude >= -90;
        }
    };
});