const { Router } = require("express");
const AnswerController = require("../controllers/AnswerController");
const protect = require("../middlewares/auth");

module.exports = answerRouter = Router();

const answerController = new AnswerController();
answerRouter
  .route("/question/{questionId}")
  .post(protect, answerController.answerQuestion);
