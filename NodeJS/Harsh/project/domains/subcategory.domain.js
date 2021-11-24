const SubCategoryModel = require("../models/subcategory.model");
const { validateSubCategory } = require("../utils/joi.validation");

class SubCategoryDomain {
    // create SubCategory
    async createSubCategory(req, res) {
        try {
            const data = req.body;
            const { error } = validateSubCategory(data);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const subcategory = new SubCategoryModel(data);
            const result = await subcategory.save();
            res.send(result);
        }
        catch (err) { console.log(err) }
    }
    // get all SubCategories
    async getAllSubCategories(req, res) {
        try {
            const result = await SubCategoryModel.find();
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "SubCategories not found" }); }
        }
        catch (err) { console.log(err); }
    }
    // get SubCategory
    async getSubCategory(req, res) {
        try {
            const _id = req.params.id;
            const result = await SubCategoryModel.findById({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "SubCategory not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // update SubCategory
    async updateSubCategory(req, res) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const result = await SubCategoryModel.findByIdAndUpdate({ _id }, { $set: data }, { new: 1 });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "SubCategory not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // delete SubCategory
    async deleteSubCategory(req, res) {
        try {
            const _id = req.params.id;
            const result = await SubCategoryModel.findByIdAndDelete({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "SubCategory not found" }); }
        }
        catch (err) { console.log(err); }
    }
}

module.exports = SubCategoryDomain;