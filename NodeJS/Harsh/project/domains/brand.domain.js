const BrandModel = require("../models/brand.model");
const { validateBrand } = require("../utils/joi.validation");

class BrandDomain {
  //   create brand
  async createBrand(req, res) {
    try {
      const data = req.body;
      const { error } = validateBrand(data);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      const brand = new BrandModel(data);
      const result = await brand.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  //   get all brands
  async getAllBrands(req, res) {
    try {
      const result = await BrandModel.find();
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Brands not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  //   get brand
  async getBrand(req, res) {
    try {
      const _id = req.params.id;
      const result = await BrandModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Brand not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   update brand
  async updateBrand(req, res) {
    try {
      const data = req.body;
      const _id = req.params.id;
      const result = await BrandModel.findByIdAndUpdate(
        { _id },
        { $set: data },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "brand not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   delete brand
  async deleteBrand(req, res) {
    try {
      const _id = req.params.id;
      const result = await BrandModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Brand not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = BrandDomain;
