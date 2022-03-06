const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const orderItemSchema = new mongoose.Schema(
  {
    order: {
      type: Number,
      ref: "orderDetail",
      required: true,
      min: 0,
    },
    products: {
      type: Number,
      ref: "product",
      required: true,
      min: 0,
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
      ref: "discount",
      required: true,
      min: 0,
    },
  },
  { timestamp: true }
);
orderItemSchema.plugin(autoIncrement.plugin, {
  model: "orderItem",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const OrderItemModel = mongoose.model("orderItem", orderItemSchema);

module.exports = OrderItemModel;
