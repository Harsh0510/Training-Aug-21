const PaymentDomain = require("../domains/payment.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class PaymentController {
    // create Payment
    static createPayment(req, res) {
        const payment = new PaymentDomain();
        payment.createPayment(req, res);
    }
    // get all Payments
    static getAllPayments(req, res) {
        const payment = new PaymentDomain();
        payment.getAllPayments(req, res);
    }
    // get Payment
    static getPayment(req, res) {
        const payment = new PaymentDomain();
        payment.getPayment(req, res);
    }
    // update Payment
    static updatePayment(req, res) {
        const payment = new PaymentDomain();
        payment.updatePayment(req, res);
    }
    // delete Payment
    static deletePayment(req, res) {
        const payment = new PaymentDomain();
        payment.deletePayment(req, res);
    }
}

// Payment routes

router.post("/", verifytoken, authPage(["1", "0"]), PaymentController.createPayment);
router.get("/", verifytoken, authPage(["1", "0"]), PaymentController.getAllPayments);
router.get("/:id", verifytoken, authPage(["1", "0"]), PaymentController.getPayment);
router.put("/:id", verifytoken, authPage(["1", "0"]), PaymentController.updatePayment);
router.delete("/:id", verifytoken, authPage(["1", "0"]), PaymentController.deletePayment);


module.exports = router;
