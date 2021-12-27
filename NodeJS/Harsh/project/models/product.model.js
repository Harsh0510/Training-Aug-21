const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    _id: Number,
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    subcategory: {
      type: Number,
      ref: "subcategory",
    },
  },
  { timestamp: true }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
