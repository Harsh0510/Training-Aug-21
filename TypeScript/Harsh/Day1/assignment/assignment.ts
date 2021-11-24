var employees: { emp_ID: number, firstName: string, lastName: string, address: string, salary: number }[] =
    [{ "emp_ID": 1, "firstName": "patel", "lastName": "manav", "address": "25 bopal, ahmedabad, gujarat", "salary": 25000 },
    { "emp_ID": 2, "firstName": "shah", "lastName": "raj", "address": "30 ghodasar, ahmedabad, gujarat", "salary": 30000 },
    { "emp_ID": 3, "firstName": "prajapati", "lastName": "rahul", "address": "35 isanpur, ahmedabad, gujarat", "salary": 22000 },
    { "emp_ID": 4, "firstName": "pujara", "lastName": "yash", "address": "40 isanpur, ahmedabad, gujarat", "salary": 22000 },
    { "emp_ID": 5, "firstName": "bhatt", "lastName": "sagar", "address": "45 shahpur, ahmedabad, gujarat", "salary": 23000 }]



// insert


var insert_emp: { emp_ID: number, firstName: string, lastName: string, address: string, salary: number } =
    { "emp_ID": 6, "firstName": "patel", "lastName": "rahul", "address": "bopal", "salary": 25000 }

employees.push(insert_emp);
console.log(employees);

// delete

employees.pop();
console.log(employees);

// join
var emp1: { emp_ID: number, firstName: string, lastName: string, address: string, salary: number }[] = [
    { "emp_ID": 7, "firstName": "patel", "lastName": "divyang", "address": "bopal", "salary": 25000 }]

var join_emp = employees.concat(emp1);
var fullName =

    console.log(join_emp);

// pf and salary

for (var value of employees) {

    var pf: number = value.salary * (12 / 100);
    var netSalary: number = value.salary - pf;
    console.log("pf of employee " + value.emp_ID + " is " + pf);
    console.log("net salary of employee " + value.emp_ID + " is " + netSalary);
}

// search

var emp = employees.filter(x => x.emp_ID == 3);
console.log(emp);


// address and full name

for (var val of employees) {
    var address = val["address"].split(',');
    console.log(address);
    console.log("Full Name :" + val.firstName + " " + val.lastName);
}



