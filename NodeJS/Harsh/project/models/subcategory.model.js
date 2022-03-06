const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const subcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "SubCategory name is required"],
      minlength: [2, "name must be greater than or equal to 2 characters"],
      maxlength: [50, "name must be less than or equal to 50 characters"],
    },
    category: {
      type: Number,
      ref: "category",
      min: 0,
      required: [true, "Category Id is required"],
    },
  },
  { timestamp: true }
);
subcategorySchema.plugin(autoIncrement.plugin, {
  model: "subcategory",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const SubCategoryModel = mongoose.model("subcategory", subcategorySchema);

module.exports = SubCategoryModel;
