"use strict";
// importing a single export from a module
exports.__esModule = true;
// import { Employee } from "./employee";
// let empObj = new Employee("manav", 1);
// empObj.displayEmployee();
// importing the entire module into a variable
// import * as Emp from "./employee";
// console.log(Emp.age);
// let empObj = new Emp.Employee("manav", 1);
// empObj.displayEmployee();
// renaming an export from a module 
var employee_1 = require("./employee");
var empObj = new employee_1.Employee("manav", 1);
empObj.displayEmployee();
