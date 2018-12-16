const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser({ extended: true }));

app.get("/", (req, res) => {
    res.json("Reached /");
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Server started on http://localhost:3333");
});
