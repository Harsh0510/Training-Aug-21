const ProfileModel = require("../models/profile.model");
const { validateProfile } = require("../utils/joi.validation");

class ProfileDomain {
  //   get profile
  async getProfile(req, res) {
    try {
      const _id = req.params.id;
      const result = await ProfileModel.find({ user: _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Profile not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   update profile
  async updateProfile(req, res) {
    try {
      var data = req.body;
      const _id = req.params.id;
      const { error } = validateProfile(data);
      if (error) {
        return res.status(400).json({
          message: error.details[0].message,
        });
      }
      const result = await ProfileModel.findOneAndUpdate(
        { user: _id },
        { $set: data },
        { new: 1, runValidators: true }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "Profile not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = ProfileDomain;
