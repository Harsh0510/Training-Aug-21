import { Customer } from "./customer";
import { Restaurant } from "./restaurant";
import { Table } from "./table";

// customer

var customerObj: Array<Customer> = [new Customer(1, "manav", "manav112@gmail.com", "6756565656"),
new Customer(2, "raj", "raj112@gmail.com", "9676565445")]


for (var value1 of customerObj) {
    value1.displayCustomer();
}


// restaurant

var restaurantObj: Array<Restaurant> = [new Restaurant(1, "Epitome", "ahmedabad", "gujarat", "india"),
new Restaurant(2, "nilkanth", "ahmedabad", "gujarat", "india")]


for (var value2 of restaurantObj) {
    value2.displayRestaurant();
}

// table

export var tableObj: Array<Table> = [new Table(1, 1, "two person table", 5),
new Table(2, 2, "family dinning table", 5)]


for (var value3 of tableObj) {
    value3.displaytable();
}
