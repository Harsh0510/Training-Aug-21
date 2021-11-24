const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    description: {
        type: String,
        required: true
    },
    subcategory: {
        type: Number,
        ref: "subcategory"
    }

}, { timestamp: true });

const CategoryModel = mongoose.model("category", categorySchema);


module.exports = CategoryModel;
