const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const discountSchema = new mongoose.Schema(
  {
    percentage: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: Boolean,
      default: 1,
    },
  },
  { timestamp: true }
);
discountSchema.plugin(autoIncrement.plugin, {
  model: "discount",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});
const DiscountModel = mongoose.model("discount", discountSchema);

module.exports = DiscountModel;
