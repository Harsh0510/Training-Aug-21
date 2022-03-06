const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    _id: Number,
    user: {
      type: Number,
      ref: "userDetail",
      unique: [true, "user already exists"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      trim: true,
      lowercase: true,
      enum: ["male", "female"],
    },
  },
  { timestamps: true }
);

const ProfileModel = mongoose.model("profileDetail", profileSchema);

module.exports = ProfileModel;
