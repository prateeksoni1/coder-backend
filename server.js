const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser({ extended: true }));

app.get("/", (req, res) => {
    res.json("Reached /");
});

const PORT = process.env.PORT || 3333;

mongoose
    .connect(
        "mongodb+srv://pro:gFS54tqYmrHhvuEV@cluster0-v7rdd.mongodb.net/test?retryWrites=true"
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(
                "Server started on http://localhost:3333"
            );
        });
    });
