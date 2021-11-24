const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: Number,
    userName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        minlength: 1,
        maxlength: 1024,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true
    },
    roles: {
        type: Number,
        ref: "role",
        required: true
    },
    isActive: {
        type: "boolean",
        default: 1
    }
}, { timestamps: true });


const UserModel = mongoose.model("userDetail", userSchema);

module.exports = UserModel;