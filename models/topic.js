const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model("Topic", topicSchema);
