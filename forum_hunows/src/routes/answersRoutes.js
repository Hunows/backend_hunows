const { Router } = require("express");
const AnswerController = require("../controllers/AnswerController");
const protect = require("../middlewares/auth");

module.exports = answerRouter = Router();

const answerController = new AnswerController();
answerRouter
  .route("/question/{questionId}/answers")
  .post(protect, answerController.answerQuestion);
