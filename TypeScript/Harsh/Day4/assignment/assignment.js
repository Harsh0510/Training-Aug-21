const employee = [{ id: 1, name: "manav", city: "ahmedabad", doj: new Date("2021-11-21") },
{ id: 2, name: "raj", city: "mumbai", doj: new Date("2021-10-22") },
{ id: 3, name: "rahul", city: "mumbai", doj: new Date("2015-12-23") },
{ id: 4, name: "yash", city: "ahmedabad", doj: new Date("2020-01-21") },
{ id: 5, name: "sagar", city: "ahmedabad", doj: new Date("2021-02-22") },];
// console.log("employees: ", employee);
// get employee by id
function getEmployeeById(employee, id) {
    var emp = employee.filter(x => x.id == id);
    return emp[0];
}
var getEmp = getEmployeeById(employee, 2);
console.log("employee: ", getEmp);
// Search the employees who has joined after year 2020
function getEmployeeByYear(employee, year) {
    var empData = employee.filter(x => x.doj.getFullYear() > year);
    return empData;
}
var getEmp1 = getEmployeeByYear(employee, 2020);
console.log("employee: ", getEmp1);
// Search the employee who has joined after year 2020 and stays in Mumbai city
function getEmployeeByYearAndCity(employee, year, city) {
    var employeeData = employee.filter(x => x.doj.getFullYear() > year && x.city == "mumbai");
    return employeeData;
}
var getEmployee = getEmployeeByYearAndCity(employee, 2020, "mumbai");
console.log("employee: ", getEmployee);
