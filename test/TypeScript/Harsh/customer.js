"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(customerId, customerName, customerEmail, customerPhoneNumber) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhoneNumber = customerPhoneNumber;
    }
    Customer.prototype.displayCustomer = function () {
        console.log("".concat(this.customerId, "\t").concat(this.customerName, "\t").concat(this.customerEmail, "\t").concat(this.customerPhoneNumber, "\t"));
    };
    return Customer;
}());
exports.Customer = Customer;
