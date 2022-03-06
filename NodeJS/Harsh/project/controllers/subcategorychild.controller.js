const SubCategoryChildDomain = require("../domains/subcategorychild.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class SubCategoryChildController {
  // create Subcategorychild
  static createSubCategoryChild(req, res) {
    const subcategorychild = new SubCategoryChildDomain();
    subcategorychild.createSubCategoryChild(req, res);
  }
  // get all Subcategorychild
  static getAllSubCategoryChild(req, res) {
    const subcategorychild = new SubCategoryChildDomain();
    subcategorychild.getAllSubCategoryChild(req, res);
  }
  // get Subcategorychild
  static getSubCategoryChild(req, res) {
    const subcategorychild = new SubCategoryChildDomain();
    subcategorychild.getSubCategoryChild(req, res);
  }
  // update Subcategorychild
  static updateSubCategoryChild(req, res) {
    const subcategorychild = new SubCategoryChildDomain();
    subcategorychild.updateSubCategoryChild(req, res);
  }
  // delete Subcategorychild
  static deleteSubCategoryChild(req, res) {
    const Subcategorychild = new SubCategoryChildDomain();
    Subcategorychild.deleteSubCategoryChild(req, res);
  }
}

// Subcategorychild routes

router.post(
  "/",
  verifytoken,
  authPage([1]),
  SubCategoryChildController.createSubCategoryChild
);
router.get("/", SubCategoryChildController.getAllSubCategoryChild);
router.get(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  SubCategoryChildController.getSubCategoryChild
);
router.put(
  "/:id",
  verifytoken,
  authPage([1]),
  SubCategoryChildController.updateSubCategoryChild
);
router.delete(
  "/:id",
  verifytoken,
  authPage([1]),
  SubCategoryChildController.deleteSubCategoryChild
);

module.exports = router;
