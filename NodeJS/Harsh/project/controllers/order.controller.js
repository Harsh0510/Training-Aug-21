const OrderDomain = require("../domains/order.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class OrderController {
  // create Order
  static createOrder(req, res) {
    const order = new OrderDomain();
    order.createOrder(req, res);
  }
  // get all Orders
  static getAllOrders(req, res) {
    const order = new OrderDomain();
    order.getAllOrders(req, res);
  }
  // get Order
  static getOrder(req, res) {
    const order = new OrderDomain();
    order.getOrder(req, res);
  }
  // delete Order
  static deleteOrder(req, res) {
    const order = new OrderDomain();
    order.deleteOrder(req, res);
  }
  // create payment
  static razorpayVerifyPayment(req, res) {
    const payment = new OrderDomain();
    payment.razorpayVerifyPayment(req, res);
  }
}

// Order routes

router.post("/", verifytoken, authPage([1, 2]), OrderController.createOrder);
router.post(
  "/payment",
  verifytoken,
  authPage([1, 2]),
  OrderController.razorpayVerifyPayment
);
router.get("/", verifytoken, authPage([1, 2]), OrderController.getAllOrders);
router.get("/:id", verifytoken, authPage([1, 2]), OrderController.getOrder);
router.delete(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  OrderController.deleteOrder
);

module.exports = router;
