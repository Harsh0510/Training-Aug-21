var Product = /** @class */ (function () {
    function Product(id, name, quantity, price) {
        this.product_ID = id;
        this.productName = name;
        this.productQuantity = quantity;
        this.productPrice = price;
    }
    Product.prototype.purchase = function (qty) {
        console.log("product_ID: ".concat(this.product_ID, "  productName: ").concat(this.productName, " productPrice: ").concat(this.productPrice));
        this.productQuantity -= qty;
        this.checkQuantity();
    };
    Product.prototype.checkQuantity = function () {
        if (this.productQuantity < 5) {
            console.log("product quantity is less than 5, available products are ".concat(this.productQuantity));
        }
        else {
            console.log("".concat(this.productQuantity, " products are available "));
        }
    };
    return Product;
}());
var obj = [new Product(1, "laptop", 10, 50000),
    new Product(2, "tv", 20, 25000),
    new Product(3, "refrigerator", 30, 30000),
    new Product(4, "washing machine", 10, 40000),
    new Product(5, "mobile", 50, 20000)];
obj[2].purchase(7);
