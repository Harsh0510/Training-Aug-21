const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true
    }
}, { timestamp: true });

const SubCategoryModel = mongoose.model("subcategory", subcategorySchema);


module.exports = SubCategoryModel;
