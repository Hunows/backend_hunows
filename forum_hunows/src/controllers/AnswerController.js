const Answer = require("../models/Answer.js");
//const Question = require("../models/Question.js");

module.exports = class AnswerQuestion {
  async answerQuestion(req, res) {
    const answer = await Question;
    if ((Question, userId)) {
      answer.create({ answerBody });
      return res
        .status(201)
        .json({
          message: "Your reply has been registered successfully.",
          Answer,
        })
        .catch((error) => {
          res.status(400).json({ status: "error", message: error.message });
        });
    }
  }
};

//essa pergunta foi resolvida?
module.exports = class QuestionSolved {};
