const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    _id: Number,
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: boolean,
        required: true
    }
}, { timestamp: true });

const PaymentModel = mongoose.model("payment", paymentSchema);


module.exports = PaymentModel;
