"use strict";
exports.__esModule = true;
exports.Employee = exports.age = void 0;
exports.age = 20;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: ".concat(this.empCode, "  Employee Name: ").concat(this.empName));
    };
    return Employee;
}());
exports.Employee = Employee;
