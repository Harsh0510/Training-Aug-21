// namespace
var stringUtility;
(function (stringUtility) {
    function toCapital(str) {
        return str.toUpperCase();
    }
    stringUtility.toCapital = toCapital;
    function subString(str) {
        return str.substr(1, 4);
    }
    stringUtility.subString = subString;
})(stringUtility || (stringUtility = {}));
/// <reference path="./stringUtiliy.ts" />
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empName = stringUtility.toCapital(name);
        this.empCode = code;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee Code: ".concat(this.empCode, "  Employee Name: ").concat(this.empName));
    };
    return Employee;
}());
var empObj = new Employee("raj", 1);
empObj.displayEmployee();
