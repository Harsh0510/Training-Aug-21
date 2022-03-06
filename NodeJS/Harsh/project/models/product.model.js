const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      trim: true,
      required: [true, "Product name is required"],
      minlength: [2, "name must be greater than or equal to 2 characters"],
      maxlength: [50, "name must be less than or equal to 50 characters"],
      unique: false,
    },
    description: {
      type: [String],
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      min: 0,
    },
    offerprice: {
      type: Number,
      min: 0,
    },
    subcategorychild: {
      type: Number,
      ref: "subcategorychild",
      min: 0,
      required: [true, "SubCategory Id is required"],
    },
    discount: {
      type: Number,
      ref: "discount",
      min: 0,
    },
    brand: {
      type: Number,
      ref: "brand",
      min: 0,
      required: [true, "Brand Id is required"],
    },
  },
  { timestamp: true }
);
productSchema.plugin(autoIncrement.plugin, {
  model: "product",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
