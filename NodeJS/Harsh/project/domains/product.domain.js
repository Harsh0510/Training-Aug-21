const ProductModel = require("../models/product.model");
const { validateProduct } = require("../utils/joi.validation");

class ProductDomain {
    // create product
    async createProduct(req, res) {
        try {
            const data = req.body;
            const { error } = validateProduct(data);
            if (error) {
                return res.status(400).json({ message: error.details[0].message });
            }
            const product = new ProductModel(data);
            const result = await product.save();
            res.send(result);
        }
        catch (err) { console.log(err) }
    }
    // get all products
    async getAllProducts(req, res) {
        try {
            const result = await ProductModel.find();
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "products not found" }); }
        }
        catch (err) { console.log(err); }
    }
    // get product
    async getProduct(req, res) {
        try {
            const _id = req.params.id;
            const result = await ProductModel.findById({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "product not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // update product
    async updateProduct(req, res) {
        try {
            const data = req.body;
            const _id = req.params.id;
            const result = await ProductModel.findByIdAndUpdate({ _id }, { $set: data }, { new: 1 });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "product not found" }); }
        }
        catch (err) { console.log(err); }
    }

    // delete product
    async deleteProduct(req, res) {
        try {
            const _id = req.params.id;
            const result = await ProductModel.findByIdAndDelete({ _id });
            if (result) { res.send(result); }
            else { res.status(401).json({ message: "product not found" }); }
        }
        catch (err) { console.log(err); }
    }
}

module.exports = ProductDomain;