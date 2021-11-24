const UserDomain = require("../domains/user.domain");
const express = require("express");
const router = express.Router();
const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class UserController {
    // create user
    static createUser(req, res) {
        const user = new UserDomain();
        user.createUser(req, res);
    }
    // get all user
    static getAllUsers(req, res) {
        const user = new UserDomain();
        user.getAllUsers(req, res);
    }
    // login user
    static loginUser(req, res) {
        const user = new UserDomain();
        user.loginUser(req, res);
    }
    static createRole(req, res) {
        const role = new UserDomain();
        user.createRole(req, res);
    }
}

// user routes
router.post("/", UserController.createUser);
router.get("/", verifytoken, authPage(["1"]), UserController.getAllUsers);
router.post("/login", UserController.loginUser);

module.exports = router;
