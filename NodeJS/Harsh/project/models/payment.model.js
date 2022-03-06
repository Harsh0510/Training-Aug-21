const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const paymentSchema = new mongoose.Schema(
  {
    _id: Number,
    transactionId: {
      type: String,
      max: [30, `Transaction id  must be less than or equal to 30 digits.`],
      required: [true, `Transaction id is required.`],
      alias: "razorpayPaymentId",
    },
    razorpaySignature: {
      type: String,
      max: [
        100,
        `Razorpay signature must be less than or equal to 100 digits.`,
      ],
      required: [true, `Razorpay signature is required.`],
    },
    razorpayOrderId: {
      type: String,
      max: [30, `Razorpay order id must be less than or equal to 30 digits.`],
      required: [true, `Razorpay order id is required.`],
    },
    amount: {
      type: Number,
      required: [true, `Amount is required.`],
      min: [0, `Amount must be greater than or equal to 0.`],
    },
    method: {
      type: String,
      alias: "paymentMethod",
      max: [20, `Payment method must be less than or equal to 20.`],
      required: [true, `Payment method is required.`],
    },
    status: {
      type: Boolean,
      required: [true, `Payment status is required.`],
      default: 0,
    },
    orderId: {
      type: Number,
      ref: "orderDetail",
      required: [true, `Order Id is required.`],
    },
    isActive: {
      type: Boolean,
      require: true,
      default: 1,
    },
  },
  { timestamp: true }
);
paymentSchema.plugin(autoIncrement.plugin, {
  model: "payment",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});
const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = PaymentModel;
