const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);
const subcategorychildSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "SubCategoryChild name is required"],
      minlength: [2, "name must be greater than or equal to 2 characters"],
      maxlength: [50, "name must be less than or equal to 50 characters"],
    },
    subcategory: {
      type: Number,
      ref: "subcategory",
      min: 0,
      required: [true, "SubCategory Id is required"],
    },
  },
  { timestamp: true }
);
subcategorychildSchema.plugin(autoIncrement.plugin, {
  model: "subcategorychild",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});
const SubCategoryChildModel = mongoose.model(
  "subcategorychild",
  subcategorychildSchema
);

module.exports = SubCategoryChildModel;
