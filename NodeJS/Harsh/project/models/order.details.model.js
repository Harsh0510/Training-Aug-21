const mongoose = require("mongoose");

const orderDetailSchema = new mongoose.Schema({
    _id: Number,
    users: {
        type: Number,
        ref: "userDetail",
        required: true
    },
    products: {
        type: Number,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    payments: {
        type: Number,
        ref: "payment",
        required: true
    }

}, { timestamp: true });

const OrderDetailModel = mongoose.model("orderdetail", orderDetailSchema);


module.exports = OrderDetailModel;
