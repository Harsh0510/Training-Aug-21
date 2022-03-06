const DiscountDomain = require("../domains/discount.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class DiscountController {
  // create discount
  static createDiscount(req, res) {
    const discount = new DiscountDomain();
    discount.createDiscount(req, res);
  }
  // get all discounts
  static getAllDiscounts(req, res) {
    const discount = new DiscountDomain();
    discount.getAllDiscounts(req, res);
  }
  // get discount
  static getDiscount(req, res) {
    const discount = new DiscountDomain();
    discount.getDiscount(req, res);
  }
  // update discount
  static updateDiscount(req, res) {
    const discount = new DiscountDomain();
    discount.updateDiscount(req, res);
  }
  // delete discount
  static deleteDiscount(req, res) {
    const discount = new DiscountDomain();
    discount.deleteDiscount(req, res);
  }
}

// discount routes

router.post("/", verifytoken, authPage([1]), DiscountController.createDiscount);
router.get("/", DiscountController.getAllDiscounts);
router.get(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  DiscountController.getDiscount
);
router.put(
  "/:id",
  verifytoken,
  authPage([1]),
  DiscountController.updateDiscount
);
router.delete(
  "/:id",
  verifytoken,
  authPage([1]),
  DiscountController.deleteDiscount
);

module.exports = router;
