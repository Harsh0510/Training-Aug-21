const ProductDomain = require("../domains/product.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class ProductController {
  // create product
  static createProduct(req, res) {
    const product = new ProductDomain();
    product.createProduct(req, res);
  }
  // get all products
  static getAllProducts(req, res) {
    const product = new ProductDomain();
    product.getAllProducts(req, res);
  }
  // get product
  static getProduct(req, res) {
    const product = new ProductDomain();
    product.getProduct(req, res);
  }
  // update product
  static updateProduct(req, res) {
    const product = new ProductDomain();
    product.updateProduct(req, res);
  }
  // delete product
  static deleteProduct(req, res) {
    const product = new ProductDomain();
    product.deleteProduct(req, res);
  }
}

// product routes

router.post("/", verifytoken, authPage([1]), ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:id", verifytoken, authPage([1, 2]), ProductController.getProduct);
router.put("/:id", verifytoken, authPage([1]), ProductController.updateProduct);
router.delete(
  "/:id",
  verifytoken,
  authPage([1]),
  ProductController.deleteProduct
);

module.exports = router;
