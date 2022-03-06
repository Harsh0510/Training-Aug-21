const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);

const addressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      ref: "userDetail",
      required: true,
    },
    houseNo: {
      type: String,
      required: true,
    },
    street: {
      type: String,
    },
    landmark: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  { timestamp: true }
);
addressSchema.plugin(autoIncrement.plugin, {
  model: "address",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

const AddressModel = mongoose.model("address", addressSchema);

module.exports = AddressModel;
