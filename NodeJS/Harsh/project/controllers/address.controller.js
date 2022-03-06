const AddressDomain = require("../domains/address.domain");

const express = require("express");
const router = express.Router();

const verifytoken = require("../authentication/verifytoken");
const { authPage } = require("../authentication/authorization");

class AddressController {
  //   create address
  static createAddress(req, res) {
    const address = new AddressDomain();
    address.createAddress(req, res);
  }
  //   get all address
  static getAllAddress(req, res) {
    const address = new AddressDomain();
    address.getAllAddress(req, res);
  }
  //   get address
  static getAddress(req, res) {
    const address = new AddressDomain();
    address.getAddress(req, res);
  }
  //   update address
  static updateAddress(req, res) {
    const address = new AddressDomain();
    address.updateAddress(req, res);
  }
  //   delete address
  static deleteAddress(req, res) {
    const address = new AddressDomain();
    address.deleteAddress(req, res);
  }
}

// address routes

router.post(
  "/",
  verifytoken,
  authPage([1, 2]),
  AddressController.createAddress
);
router.get("/", verifytoken, authPage([1, 2]), AddressController.getAllAddress);
router.get("/:id", verifytoken, authPage([1, 2]), AddressController.getAddress);
router.put(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  AddressController.updateAddress
);
router.delete(
  "/:id",
  verifytoken,
  authPage([1, 2]),
  AddressController.deleteAddress
);

module.exports = router;
