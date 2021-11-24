// classes

// class Point {
//     name1: string;
//     constructor() {
//         this.name1 = "manav";
//     }

// }
// const pt = new Point();
// console.log(pt.name1);

// definite assignment assertion operator

// class Point {
//     name1!: string; //Not intialized but no error
// }


// readonly property

// class Point {
//     readonly name1: string = "manav";
//     constructor(otherName?: string) {
//         if (otherName !== undefined) {
//             this.name1 = otherName;
//         }
//     }
//     display() {
//         this.name1 = "raj" //can not assign bcs it is read only property
//     }

// }
// const pt = new Point();
// console.log(pt.name1);

// constructors

// class Point {
//     x: number;
//     constructor(x: number) {
//         this.x = x;
//     }

// }
// const pt = new Point(2);
// console.log(pt.x);

// super

// class Base {
//     k: number = 4;
// }

// class Derived extends Base {
//     constructor() {
//         super();            //super must be called before accessing "this" in constructor of a derived class.
//         console.log(this.k);

//     }
// }

// const obj = new Derived();

// methods

// class Car {
//     name1!: string;

//     display(name1: string): void {
//         this.name1 = name1;
//         console.log(this.name1);
//     }
// }
// const obj = new Car();
// obj.display("kia seltos");

// getters and setters method

// class Point {
//     _length: number = 0;
//     get length(): any {
//         return this._length;
//     }
//     set length(value) {
//         this._length = value;
//     }

// }
// const obj = new Point();
// obj.length(1);


// interface

// interface IEmployee {
//     empCode: number;
//     name: string;
//     getSalary(): any;
// }

// class Employee implements IEmployee {
//     empCode: number;
//     name: string;
//     constructor(code: number, name: string) {
//         this.empCode = code;
//         this.name = name;
//     }
//     getSalary(): any {
//         console.log(20000);

//     }
//     getEmployee(): any {
//         console.log(this.empCode, this.name);
//     }
// }

// const obj1 = new Employee(1, "manav");
// obj1.getSalary();
// obj1.getEmployee();

// function 

// function add(a: number, b: number): number {
//     return a + b;
// }
// console.log(add(2, 2));

// let sum = function (a: number, y: number): number { return a + y };
// console.log(sum(2, 7));


// enum

// enum Color { Red, Green, Blue };
// let c: Color = Color.Green;
// console.log(c);

// Tuple

// let aa: [string, number];

// aa = ["hii", 8];
// console.log(aa);

// var employee: [number, string][];
// employee = [[1, "manav"], [2, "raj"]];
// console.log(employee);

