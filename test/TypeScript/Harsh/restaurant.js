"use strict";
exports.__esModule = true;
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(restaurantId, restaurantName, restaurantCity, restaurantState, restaurantCountry) {
        this.restaurantId = restaurantId;
        this.restaurantName = restaurantName;
        this.restaurantCity = restaurantCity;
        this.restaurantState = restaurantState;
        this.restaurantCountry = restaurantCountry;
    }
    Restaurant.prototype.displayRestaurant = function () {
        console.log("".concat(this.restaurantId, "\t").concat(this.restaurantName, "\t").concat(this.restaurantCity, "\t").concat(this.restaurantState, "\t").concat(this.restaurantCountry, "\t"));
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
