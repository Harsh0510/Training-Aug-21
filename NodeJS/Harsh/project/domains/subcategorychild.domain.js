const SubCategoryChildModel = require("../models/subcategorychild.model");
const { validateSubCategoryChild } = require("../utils/joi.validation");

class SubCategoryChildDomain {
  // create SubCategoryChild
  async createSubCategoryChild(req, res) {
    try {
      const data = req.body;
      const { error } = validateSubCategoryChild(data);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const subcategorychild = new SubCategoryChildModel(data);
      const result = await subcategorychild.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  // get all SubCategorychild
  async getAllSubCategoryChild(req, res) {
    try {
      const result = await SubCategoryChildModel.find();
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "SubCategoryChild not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  // get SubCategoryChild
  async getSubCategoryChild(req, res) {
    try {
      const _id = req.params.id;
      const result = await SubCategoryChildModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "SubCategoryChild not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // update SubCategoryChild
  async updateSubCategoryChild(req, res) {
    try {
      const data = req.body;
      const _id = req.params.id;
      const result = await SubCategoryChildModel.findByIdAndUpdate(
        { _id },
        { $set: data },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "SubCategoryChild not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // delete SubCategory
  async deleteSubCategoryChild(req, res) {
    try {
      const _id = req.params.id;
      const result = await SubCategoryChildModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "SubCategoryChild not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = SubCategoryChildDomain;
