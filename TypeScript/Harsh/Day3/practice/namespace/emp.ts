/// <reference path="./stringUtiliy.ts" />

class Employee {
    empCode: number;
    empName: string;
    constructor(name: string, code: number) {
        this.empName = stringUtility.toCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log(`Employee Code: ${this.empCode}  Employee Name: ${this.empName}`);
    }
}

var empObj = new Employee("raj", 1);
empObj.displayEmployee();
