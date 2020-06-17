const Score = require("../models/score.js");

module.exports = {
  getScores(res) {
    Score.find()
      .sort({ score: -1 })
      .then((scores) => {
        return res.status(200).json({ scores });
      });
  },
};
