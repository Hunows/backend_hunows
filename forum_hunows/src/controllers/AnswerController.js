const Answer = require("../models/Answer.js");

module.exports = class AnswerQuestion {
  async answerQuestion(req, res) {
    try {
      const { id } = req.params;
      const savedAnswer = await Answer.create({
        ...req.body,
        userId: req.userId,
        questionId: id
      });
      return res.send({ savedAnswer });
    } catch (error) {
      return res.status(400).json({ message: "Erro criando pergunta" });
    }
  }

  async getAllAnswers(req, res) {
    try {
      const listAllAnswers = await Answer.find()
        .populate(
          {
            path: 'userId',
            select: 'name'
          }
        );

      if (listAllAnswers.length > 0) {
        return res.status(200).json(listAllAnswers);
      }

    } catch (error) {
      return res.status(500).json(error);
    }
  }
};
