const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    _id: Number,
    role: {
        type: String,
        enum: ["admin", "user"],
        lowercase: true,
        required: true,
        unique: true,
    },
}, { timestamps: true });


const RoleModel = mongoose.model("role", roleSchema);


async function createRole(data) {
    try {
        const userRole = new RoleModel(data);
        const result = await userRole.save();
        console.log(result);
    }
    catch (err) { console.log(err) }
}


module.exports = createRole;



















































































































































































































































































