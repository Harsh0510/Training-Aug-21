const mongoose = require("mongoose");
const ProfileModel = require("./profile.model");
const autoIncrement = require("mongoose-auto-increment");
autoIncrement.initialize(mongoose.connection);
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "firstName is required"],
      minlength: [2, "firstName must be greater than or equal to 2 characters"],
      maxlength: [
        255,
        "firstName must be less than or equal to 255 characters",
      ],
    },
    lastName: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "lastName is required"],
      minlength: [2, "lastName must be greater than or equal to 2 characters"],
      maxlength: [255, "lastName must be less than or equal to 255 characters"],
    },
    password: {
      type: String,
      trim: true,
      minlength: [8, "password must be greater than or equal to 8 characters"],
      maxlength: [
        1024,
        "password must be less than or equal to 1024 characters",
      ],
      required: [true, "password is required"],
    },
    emailAddress: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "email is required"],
      maxlength: [255, "email must be less than or equal to 255 characters"],
      unique: [true, "email is already exists"],
      match: [
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/,
        "email should be valid",
      ],
    },
    mobileNumber: {
      type: String,
      required: [true, "phoneNumber is required"],
      trim: true,
      match: [/^[6-9]{1}[0-9]{9}$/, "Phone number should be valid"],
    },
    roles: {
      type: Number,
      ref: "role",
      default: 2,
      required: [true, "Role id is required"],
    },
    isActive: {
      type: "boolean",
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);
userSchema.plugin(autoIncrement.plugin, {
  model: "userDetail",
  field: "_id",
  startAt: 1,
  incrementBy: 1,
});

userSchema.post("save", async function (user) {
  const profile = new ProfileModel({
    _id: user._id,
    user: user._id,
  });
  const saveProfile = await profile.save();
});

const UserModel = mongoose.model("userDetail", userSchema);

module.exports = UserModel;
