const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    goals: {
        type: String,
        required: false
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;