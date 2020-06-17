const express = require("express");

exports.router = function () {
  var apiRouter = express.Router();

  apiRouter.route("/scores/getScores");
  return apiRouter;
};
