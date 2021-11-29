"use strict";
exports.__esModule = true;
exports.tableObj = void 0;
var table_1 = require("./table");
// // customer
// var customerObj: Array<Customer> = [new Customer(1, "manav", "manav112@gmail.com", "6756565656"),
// new Customer(2, "raj", "raj112@gmail.com", "9676565445")]
// for (var value1 of customerObj) {
//     value1.displayCustomer();
// }
// // customer
// var restaurantObj: Array<Restaurant> = [new Restaurant(1, "Epitome", "ahmedabad", "gujarat", "india"),
// new Restaurant(2, "nilkanth", "ahmedabad", "gujarat", "india")]
// for (var value2 of restaurantObj) {
//     value2.displayRestaurant();
// }
// table
exports.tableObj = [new table_1.Table(1, 1, "two person table", 5),
    new table_1.Table(2, 2, "family dinning table", 5)];
for (var _i = 0, tableObj_1 = exports.tableObj; _i < tableObj_1.length; _i++) {
    var value3 = tableObj_1[_i];
    value3.displaytable();
}
