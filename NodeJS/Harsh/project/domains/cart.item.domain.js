const CartModel = require("../models/cart.item.model");
const { validateCartItem } = require("../utils/joi.validation");

class CartDomain {
    // create cart
    async createCart(req, res) {
        try {
            const data = req.body;
            const { error } = validateCartItem(data);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const cart = new CartModel(data);
            const result = await cart.save();
            res.send(result);
        }
        catch (err) { console.log(err) }
    }
    // get all carts
    async getAllCarts(req, res) {
        try {
            const result = await CartModel.find();
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "carts not found" }); }
        }
        catch (err) { console.log(err); }
    }
    // get cart
    async getCart(req, res) {
        try {
            const _id = req.params.id;
            const result = await CartModel.findById({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "cart not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // update cart
    async updateCart(req, res) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const result = await CartModel.findByIdAndUpdate({ _id }, { $set: data }, { new: 1 });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "cart not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // delete cart
    async deleteCart(req, res) {
        try {
            const _id = req.params.id;
            const result = await CartModel.findByIdAndDelete({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "cart not found" }); }
        }
        catch (err) { console.log(err); }
    }
}

module.exports = CartDomain;