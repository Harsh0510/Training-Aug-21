const CartModel = require("../models/cart.item.model");
const ProductModel = require("../models/product.model");
const { validateCartItem } = require("../utils/joi.validation");

class CartDomain {
  // create cartItem
  async createCart(req, res) {
    try {
      var data = req.body;
      var user = req.decoded._id;
      const { error } = validateCartItem(data);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      let { price, ...d } = data;
      const product = await ProductModel.findById(d.products);
      price = d.quantity * product.offerprice;
      const cart = new CartModel({ ...d, price: price, user: user });
      const result = await cart.save();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  }
  //   get all cart items
  async getAllCarts(req, res) {
    try {
      const result = await CartModel.find().populate([
        { path: "products", populate: { path: "discount" } },
      ]);
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "carts not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  //   get cartItem
  async getCart(req, res) {
    try {
      const _id = req.params.id;
      const result = await CartModel.findById({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "cart not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   update cartItem
  async updateCart(req, res) {
    try {
      let data = req.body;
      const _id = req.params.id;
      const cart = await CartModel.findById(_id);
      const product = await ProductModel.findById(cart.products);
      data = { ...data, price: data.quantity * product.offerprice };
      const result = await CartModel.findByIdAndUpdate(
        { _id },
        { $set: data },
        { new: 1 }
      );
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "cart not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }

  //   delete cartItem
  async deleteCart(req, res) {
    try {
      const _id = req.params.id;
      const result = await CartModel.findByIdAndDelete({ _id });
      if (result) {
        res.send(result);
      } else {
        res.status(401).json({ message: "cart not found" });
      }
    } catch (err) {
      console.log(err);
    }
  }
  // delete cart

  // async deleteCart(req, res) {
  //   try {
  //     let userId = req.decoded._id;
  //     const result = await CartModel.deleteMany({ userId });
  //     if (result) {
  //       res.json({ message: "your cart has been empty!" });
  //     } else {
  //       res.status(401).json({ message: "cart not found" });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}

module.exports = CartDomain;
