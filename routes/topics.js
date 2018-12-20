const route = require("express").Router();
const Topic = require("../models/topic");

route.get("/cpp", (req, res) => {
  Topic.find({ type: "cpp" }).then(topics => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.send(topics);
  });
});

route.post("/add-topic", (req, res) => {
  const name = req.body.name;
  const url = req.body.url;
  const topic = new Topic({
    type: req.params.type,
    name: name,
    url: url
  });
  topic.save().then(topic => {
    res.send(topic);
  });
});

module.exports = route;
