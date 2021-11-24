const SubCategoryDomain = require("../domains/subcategory.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class SubCategoryController {
    // create Subcategory
    static createSubCategory(req, res) {
        const subcategory = new SubCategoryDomain();
        subcategory.createSubCategory(req, res);
    }
    // get all Subcategories
    static getAllSubCategories(req, res) {
        const subcategory = new SubCategoryDomain();
        subcategory.getAllSubCategories(req, res);
    }
    // get Subcategory
    static getSubCategory(req, res) {
        const subcategory = new SubCategoryDomain();
        subcategory.getSubCategory(req, res);
    }
    // update Subcategory
    static updateSubCategory(req, res) {
        const subcategory = new SubCategoryDomain();
        subcategory.updateSubCategory(req, res);
    }
    // delete Subcategory
    static deleteSubCategory(req, res) {
        const Subcategory = new SubCategoryDomain();
        Subcategory.deleteSubCategory(req, res);
    }
}

// Subcategory routes

router.post("/", verifytoken, authPage(["1"]), SubCategoryController.createSubCategory);
router.get("/", verifytoken, authPage(["1", "0"]), SubCategoryController.getAllSubCategories);
router.get("/:id", verifytoken, authPage(["1", "0"]), SubCategoryController.getSubCategory);
router.put("/:id", verifytoken, authPage(["1"]), SubCategoryController.updateSubCategory);
router.delete("/:id", verifytoken, authPage(["1"]), SubCategoryController.deleteSubCategory);


module.exports = router;
