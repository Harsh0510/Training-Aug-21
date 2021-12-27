const UserModel = require("../models/user.model");
const { validateUser, validateUserLogin } = require("../utils/joi.validation");
const { genSalt, hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserDomain {
  // register user
  async createUser(req, res) {
    const data = req.body;
    const { error } = validateUser(data);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    let user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      res.status(400).json({ message: "user already registered" });
    } else {
      user = new UserModel(data);
      const salt = await genSalt(10);
      user.password = await hash(user.password, salt);
      const result = await user.save();
      res.send(result);
    }
  }
  //to get all users
  async getAllUsers(req, res) {
    const user = await UserModel.find();
    res.send(user);
  }

  // get user by id
  async getUserById(req, res) {
    try {
      // const data = req.body;
      const _id = req.params.id;
      const result = await UserModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "user not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // login user
  async loginUser(req, res) {
    try {
      const data = req.body;
      const { error } = validateUserLogin(data);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      let user = await UserModel.findOne({ email: data.email });
      if (!user) {
        return res.status(400).json({ message: "invalid email or password" });
      }
      const validatePassword = await compare(data.password, user.password);
      if (!validatePassword) {
        return res.status(400).json({ message: "invalid password" });
      }
      // generate token
      const token = jwt.sign(user.toJSON(), global.config.secretKey, {
        algorithm: global.config.algorithm,
        expiresIn: global.config.expiresIn,
      });
      res.json({
        message: "login successfully",
        token: token,
      });
    } catch (err) {
      console.log(err);
    }
  }

  // delete user
  async deleteUser(req, res) {
    try {
      // const data = req.body;
      const _id = req.params.id;
      const result = await UserModel.findByIdAndUpdate(
        { _id },
        { $set: { isActive: 0 } },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "user not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserDomain;
