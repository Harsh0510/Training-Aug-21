const AddressModel = require("../models/address.model");
// const { validateProfile } = require("../utils/joi.validation");

class AddressDomain {
  //   create address
  async createAddress(req, res) {
    try {
      let data = req.body;
      let user = req.decoded._id;
      const address = new AddressModel({ ...data, user });
      const result = await address.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }

  //   get all address
  async getAllAddress(req, res) {
    try {
      const result = await AddressModel.find();
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Address not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   get address
  async getAddress(req, res) {
    try {
      const _id = req.params.id;
      const result = await AddressModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Address not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   update address
  async updateAddress(req, res) {
    try {
      var data = req.body;
      const _id = req.params.id;
      let user = req.decoded._id;
      data = { ...data, user };
      const result = await AddressModel.findOneAndUpdate(
        { _id },
        { $set: data },
        { new: 1, runValidators: true }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Address not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  //   delete address
  async deleteAddress(req, res) {
    try {
      const _id = req.params.id;
      const result = await AddressModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Address not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = AddressDomain;
