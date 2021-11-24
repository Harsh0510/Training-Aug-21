const PaymentModel = require("../models/payment.model");
const { validatePayment } = require("../utils/joi.validation");

class PaymentDomain {
    // create Payment
    async createPayment(req, res) {
        try {
            const data = req.body;
            const { error } = validatePayment(data);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const payment = new PaymentModel(data);
            const result = await payment.save();
            res.send(result);
        }
        catch (err) { console.log(err) }
    }
    // get all Payments
    async getAllPayments(req, res) {
        try {
            const result = await PaymentModel.find();
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Payments not found" }); }
        }
        catch (err) { console.log(err); }
    }
    // get Payment
    async getPayment(req, res) {
        try {
            const _id = req.params.id;
            const result = await PaymentModel.findById({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Payment not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // update Payment
    async updatePayment(req, res) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const result = await PaymentModel.findByIdAndUpdate({ _id }, { $set: data }, { new: 1 });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Payment not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // delete Payment
    async deletePayment(req, res) {
        try {
            const _id = req.params.id;
            const result = await PaymentModel.findByIdAndDelete({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Payment not found" }); }
        }
        catch (err) { console.log(err); }
    }
}

module.exports = PaymentDomain;