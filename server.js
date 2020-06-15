const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

const scoreSchema = new mongoose.Schema({
  user: String,
  score: Number,
  rank: Number,
});

const Score = mongoose.model("Score", scoreSchema);

// const score = new Score({
//   user: "User1",
//   score: 5,
//   rank: 1,
// });

// score.save();
