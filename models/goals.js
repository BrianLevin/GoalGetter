const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newGoal = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const newGoal = mongoose.model("newGoal", newGoalSchema);

module.exports = newGoal;