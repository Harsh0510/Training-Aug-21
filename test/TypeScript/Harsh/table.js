"use strict";
exports.__esModule = true;
exports.Table = void 0;
var main_1 = require("./main");
var Table = /** @class */ (function () {
    function Table(restaurantId, tableId, tableType, noOfAvailableTable) {
        this.restaurantId = restaurantId;
        this.tableId = tableId;
        this.tableType = tableType;
        this.noOfAvailableTable = noOfAvailableTable;
    }
    Table.prototype.displaytable = function () {
        for (var _i = 0, tableObj_1 = main_1.tableObj; _i < tableObj_1.length; _i++) {
            var value = tableObj_1[_i];
            console.log("".concat(this.restaurantId));
        }
    };
    return Table;
}());
exports.Table = Table;
