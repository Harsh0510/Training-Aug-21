const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const cartSchema = new mongoose.Schema(
  {
    products: {
      type: Number,
      ref: "product",
      required: true,
    },
    user: {
      type: Number,
      ref: "userDetail",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamp: true }
);

cartSchema.plugin(autoIncrement.plugin, {
  model: "cartItem",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const CartModel = mongoose.model("cartItem", cartSchema);

module.exports = CartModel;
