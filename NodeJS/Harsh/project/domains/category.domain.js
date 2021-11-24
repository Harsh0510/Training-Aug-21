const CategoryModel = require("../models/category.model");
const { validateCategory } = require("../utils/joi.validation");

class CategoryDomain {
    // create Category
    async createcategory(req, res) {
        try {
            const data = req.body;
            const { error } = validateCategory(data);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const category = new CategoryModel(data);
            const result = await category.save();
            res.send(result);
        }
        catch (err) { console.log(err) }
    }
    // get all Categories
    async getAllcategories(req, res) {
        try {
            const result = await CategoryModel.find();
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Categories not found" }); }
        }
        catch (err) { console.log(err); }
    }
    // get Category
    async getcategory(req, res) {
        try {
            const _id = req.params.id;
            const result = await CategoryModel.findById({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Category not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // update Category
    async updatecategory(req, res) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const result = await CategoryModel.findByIdAndUpdate({ _id }, { $set: data }, { new: 1 });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Category not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // delete Category
    async deletecategory(req, res) {
        try {
            const _id = req.params.id;
            const result = await CategoryModel.findByIdAndDelete({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Category not found" }); }
        }
        catch (err) { console.log(err); }
    }
}

module.exports = CategoryDomain;