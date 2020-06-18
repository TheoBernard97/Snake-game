const express = require("express");
const app = express();
require("dotenv").config();
var cors = require("cors");
var bodyParser = require("body-parser");
var apiRouter = require("./apiRouter").router;
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("Error connecting to mongodb");
    throw err;
  }
  console.log("Successfully connected to mongodb");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", apiRouter());

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// MOVE EVERYTHING UNDER THIS COMMENT

// function addScore(res, req, err) {
//   var username = req.body.username;
//   var score = req.body.score;
//   var rank = req.body.rank;

//   if (username == null || score == null || rank == null) {
//     return res.status(400).json({ error: "missing parameters" });
//   }

// const newScore = new Score({
//   username: "User4",
//   score: 6,
// });

// newScore.save();
// }
