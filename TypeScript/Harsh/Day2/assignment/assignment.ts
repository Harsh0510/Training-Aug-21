interface Inventory {
    product_ID: number;
    productName: string;
    productQuantity: number;
    productPrice: number;
    purchase(qty: number): void;
    checkQuantity(): void;
}

class Product implements Inventory {
    product_ID: number;
    productName: string;
    productQuantity: number;
    productPrice: number;
    constructor(id: number, name: string, quantity: number, price: number) {
        this.product_ID = id;
        this.productName = name;
        this.productQuantity = quantity;
        this.productPrice = price;
    }
    purchase(qty: number): void {
        console.log(`product_ID: ${this.product_ID}  productName: ${this.productName} productPrice: ${this.productPrice}`);
        this.productQuantity -= qty;
        this.checkQuantity();
    }
    checkQuantity(): void {
        if (this.productQuantity < 5) {
            console.log(`product quantity is less than 5, available products are ${this.productQuantity}`);
        }
        else {
            console.log(`${this.productQuantity} products are available `);
        }
    }

}

const obj: Array<any> = [new Product(1, "laptop", 10, 50000),
new Product(2, "tv", 20, 25000),
new Product(3, "refrigerator", 30, 30000),
new Product(4, "washing machine", 10, 40000),
new Product(5, "mobile", 50, 20000)]

obj[2].purchase(7);



