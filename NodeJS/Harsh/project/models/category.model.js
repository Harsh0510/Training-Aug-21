const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Category name is required"],
      minlength: [2, "name must be greater than or equal to 2 characters"],
      maxlength: [50, "name must be less than or equal to 50 characters"],
    },
  },
  { timestamp: true }
);
categorySchema.plugin(autoIncrement.plugin, {
  model: "category",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});
const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
