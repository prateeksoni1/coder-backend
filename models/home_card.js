const mongoose = require("mongoose");

const homeCardSchema = new mongoose.Schema({
    title: String,
    url: String,
    image: String
});

module.exports = mongoose.model("HomeCard", homeCardSchema);
