const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const brandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Brand name is required"],
      minlength: [2, "name must be greater than or equal to 2 characters"],
      maxlength: [50, "name must be less than or equal to 50 characters"],
    },
  },
  { timestamp: true }
);
brandSchema.plugin(autoIncrement.plugin, {
  model: "brand",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const BrandModel = mongoose.model("brand", brandSchema);

module.exports = BrandModel;
