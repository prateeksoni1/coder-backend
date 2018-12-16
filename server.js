const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HomeCard = require("./models/home_card");

const app = express();

app.use(bodyParser({ extended: true }));

app.set("view engine", "ejs");

app.post("/add-home-card", (req, res) => {
    const title = req.body.title;
    const url = req.body.url;
    const imageUrl = req.body.title;

    const homeCard = new HomeCard({
        title: title,
        url: url,
        imageUrl: imageUrl
    });
    homeCard.save().then(product => {
        res.send(product);
    });
});

app.get("/home-cards", (req, res) => {
    HomeCard.find()
        .then(products => {
            res.send(products);
        })
        .catch(err => res.send(err));
});

app.get("/", (req, res) => {
    res.json("Reached /");
});

const PORT = process.env.PORT || 3333;

mongoose
    .connect(
        "mongodb+srv://pro:gFS54tqYmrHhvuEV@cluster0-v7rdd.mongodb.net/test?retryWrites=true",
        {
            useNewUrlParser: true
        }
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                "Server started on http://localhost:3333"
            );
        });
    });
