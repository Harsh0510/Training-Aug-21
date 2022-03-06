const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const orderDetailSchema = new mongoose.Schema(
  {
    user: {
      type: Number,
      ref: "userDetail",
      required: true,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    address: {
      type: Number,
      ref: "address",
    },
    isActive: {
      type: Boolean,
      required: true,
      default: 1,
    },
    isCompleted: {
      type: Boolean,
      default: 0,
    },
  },
  { timestamp: true }
);
orderDetailSchema.plugin(autoIncrement.plugin, {
  model: "orderDetail",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const OrderDetailModel = mongoose.model("orderDetail", orderDetailSchema);

module.exports = OrderDetailModel;
