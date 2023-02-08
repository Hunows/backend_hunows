const Question = require("../models/Question");

module.exports = class QuestionController {
  async registerAsk(req, res) {
    try {
      console.log(req.params);
      const saveQuestion = await Question.create({
        ...req.body,
        userId: req.params.userId,
      });
      return res.send({ saveQuestion });
    } catch (error) {
      return res.status(400).json({ message: "Erro criando pergunta" });
    }
  }

  async getAllQue(req, res) {
    try {
      const allQue = await Question.find({});
      if (allQue.length > 0) {
        return res.status(200).json({
          status: true,
          message: "All questions",
          data: allQue,
        });
      }
      return res.status(200).json({ message: "No questions available" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};
