const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema(
  {
    _id: Number,
    users: {
      type: Number,
      ref: "userDetail",
      required: true,
    },
    cart: {
      type: Number,
      ref: "cart",
      required: true,
    },
  },
  { timestamp: true }
);

const OrderDetailModel = mongoose.model("orderdetail", orderDetailSchema);

module.exports = OrderDetailModel;
