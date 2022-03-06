const BrandDomain = require("../domains/brand.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class BrandController {
  //   create brand
  static createBrand(req, res) {
    const brand = new BrandDomain();
    brand.createBrand(req, res);
  }
  //   get all brands
  static getAllBrands(req, res) {
    const brand = new BrandDomain();
    brand.getAllBrands(req, res);
  }
  //   get brand
  static getBrand(req, res) {
    const brand = new BrandDomain();
    brand.getBrand(req, res);
  }
  //   update brand
  static updateBrand(req, res) {
    const brand = new BrandDomain();
    brand.updateBrand(req, res);
  }
  //   delete brand
  static deleteBrand(req, res) {
    const brand = new BrandDomain();
    brand.deleteBrand(req, res);
  }
}

// brand routes

router.post("/", verifytoken, authPage([1]), BrandController.createBrand);
router.get("/", BrandController.getAllBrands);
router.get("/:id", verifytoken, authPage([1, 2]), BrandController.getBrand);
router.put("/:id", verifytoken, authPage([1]), BrandController.updateBrand);
router.delete("/:id", verifytoken, authPage([1]), BrandController.deleteBrand);

module.exports = router;
