const CategoryDomain = require("../domains/category.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class CategoryController {
  // create category
  static createcategory(req, res) {
    const category = new CategoryDomain();
    category.createcategory(req, res);
  }
  // get all categories
  static getAllcategories(req, res) {
    const category = new CategoryDomain();
    category.getAllcategories(req, res);
  }
  // get category
  static getcategory(req, res) {
    const category = new CategoryDomain();
    category.getcategory(req, res);
  }
  // update category
  static updatecategory(req, res) {
    const category = new CategoryDomain();
    category.updatecategory(req, res);
  }
  // delete category
  static deletecategory(req, res) {
    const category = new CategoryDomain();
    category.deletecategory(req, res);
  }
  // navbar
  static navbar(req, res) {
    const category = new CategoryDomain();
    category.navbar(req, res);
  }
}

// category routes
// router.get("/navbar", verifytoken, authPage([1]), CategoryController.navbar);
router.post("/", verifytoken, authPage([1]), CategoryController.createcategory);
router.get("/", CategoryController.getAllcategories);
router.get(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  CategoryController.getcategory
);
router.put(
  "/:id",
  verifytoken,
  authPage([1]),
  CategoryController.updatecategory
);
router.delete(
  "/:id",
  verifytoken,
  authPage([1]),
  CategoryController.deletecategory
);

module.exports = router;
