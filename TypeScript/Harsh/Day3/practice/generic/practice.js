// Generic function
function display(arg) {
    return arg;
}
var output1 = display(4);
var output2 = display("manav");
console.log(output1);
console.log(output2);
function getItems(items) {
    return new Array().concat(items);
}
let num = getItems([100, 200, 300]);
let str = getItems(["Hii", "Hello"]);
console.log(num);
console.log(str);
function multiType(id, name) {
    console.log(typeof (id) + ", " + typeof (name));
    console.log(id + ", " + name);
}
multiType(1, "Steve");
// generic class
class StudentInfo {
    setValue(id, name) {
        this.Id = id;
        this.Name = name;
    }
    display() {
        console.log(`Id: ${this.Id} name: ${this.Name}`);
    }
}
let empObj = new StudentInfo();
empObj.setValue(1, "manav");
empObj.display();
let empObj1 = new StudentInfo();
empObj1.setValue("1", "manav");
empObj1.display();
