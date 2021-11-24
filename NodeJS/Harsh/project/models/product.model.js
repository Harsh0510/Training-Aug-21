const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id: Number,
    productName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Number,
        ref: "category",
        required: true
    }
}, { timestamp: true });

const ProductModel = mongoose.model("product", productSchema);


module.exports = ProductModel;

