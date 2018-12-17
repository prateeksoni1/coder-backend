const mongoose = require("mongoose");

const homeCardSchema = new mongoose.Schema({
    title: String,
    url: String,
    bg: String
});

module.exports = mongoose.model("HomeCard", homeCardSchema);
