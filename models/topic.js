const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({
  type: String,
  name: String,
  url: String
});

module.exports = mongoose.model("Topic", topicSchema);
