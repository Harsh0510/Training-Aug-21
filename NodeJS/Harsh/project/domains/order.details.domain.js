const OrderDetailModel = require("../models/order.details.model");
const { validateOrder } = require("../utils/joi.validation");

class OrderDomain {
    // create Otrder
    async createOrder(req, res) {
        try {
            const data = req.body;
            const { error } = validateOrder(data);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const order = new OrderDetailModel(data);
            const result = await order.save();
            res.send(result);
        }
        catch (err) { console.log(err) }
    }
    // get all Orders
    async getAllOrders(req, res) {
        try {
            const result = await OrderDetailModel.find();
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Orders not found" }); }
        }
        catch (err) { console.log(err); }
    }
    // get Order
    async getOrder(req, res) {
        try {
            const _id = req.params.id;
            const result = await OrderDetailModel.findById({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Order not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // update Order
    async updateOrder(req, res) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const result = await OrderDetailModel.findByIdAndUpdate({ _id }, { $set: data }, { new: 1 });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Order not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // delete Order
    async deleteOrder(req, res) {
        try {
            const _id = req.params.id;
            const result = await OrderDetailModel.findByIdAndDelete({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "Order not found" }); }
        }
        catch (err) { console.log(err); }
    }
}

module.exports = OrderDomain;