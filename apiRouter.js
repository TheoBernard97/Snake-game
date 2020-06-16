const express = require("express");
const scoresCtrl = require("./routes/scoresController");

exports.router = function () {
  var apiRouter = express.Router();

  apiRouter.route("/getScores").get(scoresCtrl.getScores);
  apiRouter.route("/saveScore").post(scoresCtrl.saveScore);
  return apiRouter;
};
