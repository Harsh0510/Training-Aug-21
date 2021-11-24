// Type Annotation

var name1: string = "manav";
var age: number = 21;
var isUpdated: boolean = true;

console.log(`name is ${name1},age is ${age},isUpdated ${isUpdated}`);

// Number

var first: number = 123;
var second: number = 0x37CF;
var third: number = 0o377;
var fourth: number = 0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


// Number Methods

// toExponential

var num1: number = 2412.3;
console.log(num1.toExponential());

// toFixed

var num2: number = 232.9755;

console.log(num2.toFixed());
console.log(num2.toFixed(1));
console.log(num2.toFixed(2));
console.log(num2.toFixed(5));

// toLocaleString

var num3: number = 552322.2375;
console.log(num3.toLocaleString());
console.log(num3.toLocaleString("fr-FR"));
console.log(num3.toLocaleString("en-US"));
console.log(num3.toLocaleString("nl-NL"));
console.log(num3.toLocaleString("de-DE"));
console.log(num3.toLocaleString("en-IN"));

// toPricision

var num4 = new Number(5.75);
console.log(num4.toPrecision());
console.log(num4.toPrecision(1));
console.log(num4.toPrecision(2));
console.log(num4.toPrecision(3));
console.log(num4.toPrecision(4));

// toString

var num5 = new Number(10);
console.log(num5.toString());
console.log(num5.toString(2));
console.log(num5.toString(8));

// valueOf

var num7: number = 125.99;
console.log(num7.valueOf());

// void    

function printHii(): void {
    console.log('Hi!')
}

var a: void = printHii();
console.log(a);

// Template String 

var employeeName: string = "manav";
var employeeDept: string = "Finance";

var employeeDesc: string = `${employeeName} works in the ${employeeDept} department`;
console.log(employeeDesc);

// string methods

// charAt

var str: string = "This is string";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));
console.log(str.charAt(6));
console.log(str.charAt(7));
console.log(str.charAt(8));
console.log(str.charAt(9));

// concat

var str1: string = "This is string one";
var str2: string = "This is string two";
var str3: string = str1.concat(str2);
console.log(str3);

// indexOf

var str4 = new String("This is string one");
var index = str4.indexOf("string");
console.log("indexOf found String: " + index);
// replace

var str5 = "This is react,angular and vue tutorial";
var str6 = str5.replace("and", "&");
console.log(str6);

var str7 = "i got 80 marks in maths and 60 marks in english";
var str8 = str7.replace(/\d+/, "70");
var str9 = str7.replace(/\d+/g, "70");
var str10 = str7.replace(/(\d+)([^\d]+)(\d+)/g, "$3$2$1");
console.log(str8);
console.log(str9);
console.log(str10);

// split

var str11 = "this is typeScript tutorial";
var str12 = str11.split(" ", 2);
console.log(str12);

// toUpperCase


var str13 = "this is typeScript tutorial";
var str14 = str11.toUpperCase();
console.log(str14);


// toLowerCase


var str15 = "This is typeScript tutorial";
var str16 = str11.toLowerCase();
console.log(str16);


// charCodeAt

var str17 = "This is typeScript tutorial";
console.log(str17.charCodeAt(0));
console.log(str17.charCodeAt(1));
console.log(str17.charCodeAt(2));
console.log(str17.charCodeAt(3));
console.log(str17.charCodeAt(4));

// codePointAt

// var str18 = "This is typeScript tutorial";
// console.log(str18.codePointAt(0));


// includes
// endsWith
// LastIndexOf
// localCompare
// match