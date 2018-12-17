const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HomeCard = require("./models/home_card");
const topicRouter = require("./routes/topics");

const app = express();

app.use(bodyParser({ extended: true }));

app.set("view engine", "ejs");

app.post("/add-home-card", (req, res) => {
  const title = req.body.title;
  const url = req.body.url;
  const bg = req.body.bg;

  const homeCard = new HomeCard({
    title: title,
    url: url,
    bg: bg
  });
  homeCard.save().then(card => {
    res.send(card);
  });
});

app.use("/topics", topicRouter);

app.get("/home-cards", (req, res) => {
  HomeCard.find()
    .then(cards => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
      res.send(cards);
    })
    .catch(err => res.send(err));
});

app.get("/", (req, res) => {
  res.json("Reached /");
});

const PORT = process.env.PORT || 3333;

mongoose
  .connect(
    "mongodb+srv://pro:1234@cluster0-v7rdd.mongodb.net/test?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server started on http://localhost:3333");
    });
  });
