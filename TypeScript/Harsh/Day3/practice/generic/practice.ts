// Generic function

function display<T>(arg: T): T {
    return arg;
}

var output1 = display<number>(4);
var output2 = display<string>("manav");
console.log(output1);
console.log(output2);

function getItems<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

let num = getItems<number>([100, 200, 300]);
let str = getItems<string>(["Hii", "Hello"])

console.log(num);
console.log(str);

function multiType<T, U>(id: T, name: U): void {
    console.log(typeof (id) + ", " + typeof (name));
    console.log(id + ", " + name);

}

multiType<number, string>(1, "Steve");

// generic class

class StudentInfo<T, U>{
    private Id!: T;
    private Name!: U;
    setValue(id: T, name: U): void {

        this.Id = id;
        this.Name = name;
    }
    display(): void {
        console.log(`Id: ${this.Id} name: ${this.Name}`);
    }
}

let empObj = new StudentInfo<number, string>();
empObj.setValue(1, "manav");
empObj.display();

let empObj1 = new StudentInfo<string, string>();
empObj1.setValue("1", "manav");
empObj1.display();