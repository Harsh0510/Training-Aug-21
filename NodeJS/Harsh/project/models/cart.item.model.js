const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    _id: Number,
    products: {
        type: Number,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamp: true });

const CartModel = mongoose.model("cart", cartSchema);


module.exports = CartModel;
