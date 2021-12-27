const OrderDomain = require("../domains/order.details.domain");

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
  // update Order
  static updateOrder(req, res) {
    const order = new OrderDomain();
    order.updateOrder(req, res);
  }
  // delete Order
  static deleteOrder(req, res) {
    const order = new OrderDomain();
    order.deleteOrder(req, res);
  }
}

// Order routes

router.post("/", verifytoken, authPage([1, 2]), OrderController.createOrder);
router.get("/", verifytoken, authPage([1, 2]), OrderController.getAllOrders);
router.get("/:id", verifytoken, authPage([1, 2]), OrderController.getOrder);
router.put("/:id", verifytoken, authPage([1, 2]), OrderController.updateOrder);
router.delete(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  OrderController.deleteOrder
);

module.exports = router;
