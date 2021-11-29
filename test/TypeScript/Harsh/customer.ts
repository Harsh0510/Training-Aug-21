export class Customer {
    customerId: number;
    customerName: string;
    customerEmail: string;
    customerPhoneNumber: string;

    constructor(customerId: number, customerName: string, customerEmail: string, customerPhoneNumber: string) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
        this.customerPhoneNumber = customerPhoneNumber;
    }

    displayCustomer() {
        console.log(`${this.customerId}\t${this.customerName}\t${this.customerEmail}\t${this.customerPhoneNumber}\t`);
    }
}
