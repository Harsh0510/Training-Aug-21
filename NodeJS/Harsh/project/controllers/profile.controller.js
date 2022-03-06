const ProfileDomain = require("../domains/profile.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class ProfileController {
  // get profile
  static getProfile(req, res) {
    const profile = new ProfileDomain();
    profile.getProfile(req, res);
  }
  // update profile
  static updateProfile(req, res) {
    const profile = new ProfileDomain();
    profile.updateProfile(req, res);
  }
}

// profile routes

router.get("/:id", verifytoken, authPage([1, 2]), ProfileController.getProfile);
router.put(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  ProfileController.updateProfile
);

module.exports = router;
