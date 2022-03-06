const DiscountModel = require("../models/discount.model");
//const { validateBrand } = require("../utils/joi.validation");

class DiscountDomain {
  //   create discount
  async createDiscount(req, res) {
    try {
      let data = req.body;
      //   const { error } = validateBrand(data);
      //   if (error) {
      //     return res.status(400).json({ message: error.details[0].message });
      //   }
      const discount = new DiscountModel(data);
      const result = await discount.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  //   get all discount
  async getAllDiscounts(req, res) {
    try {
      const result = await DiscountModel.find();
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Discounts not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  //   get discount
  async getDiscount(req, res) {
    try {
      const _id = req.params.id;
      const result = await DiscountModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Discount not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   update discount
  async updateDiscount(req, res) {
    try {
      const data = req.body;
      const _id = req.params.id;
      const result = await DiscountModel.findByIdAndUpdate(
        { _id },
        { $set: data },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "discount not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   delete discount
  async deleteDiscount(req, res) {
    try {
      const _id = req.params.id;
      const result = await DiscountModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Discount not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = DiscountDomain;
