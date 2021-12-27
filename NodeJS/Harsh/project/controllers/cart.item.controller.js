const CartDomain = require("../domains/cart.item.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class CartController {
  // create cart
  static createCart(req, res) {
    const cart = new CartDomain();
    cart.createCart(req, res);
  }
  // get all carts
  static getAllCarts(req, res) {
    const cart = new CartDomain();
    cart.getAllCarts(req, res);
  }
  // get cart
  static getCart(req, res) {
    const cart = new CartDomain();
    cart.getCart(req, res);
  }
  // update cart
  static updateCart(req, res) {
    const cart = new CartDomain();
    cart.updateCart(req, res);
  }
  // delete cart
  static deleteCart(req, res) {
    const cart = new CartDomain();
    cart.deleteCart(req, res);
  }
}

// cart routes

router.post("/", verifytoken, authPage([1, 2]), CartController.createCart);
router.get("/", verifytoken, authPage([1, 2]), CartController.getAllCarts);
router.get("/:id", verifytoken, authPage([1, 2]), CartController.getCart);
router.put("/:id", verifytoken, authPage([1, 2]), CartController.updateCart);
router.delete("/:id", verifytoken, authPage([1, 2]), CartController.deleteCart);

module.exports = router;
