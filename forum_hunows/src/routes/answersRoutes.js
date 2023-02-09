const { Router } = require('express');
const AnswerQuestion = require('../controllers/AnswerController');
const protect = require('../middlewares/auth');

module.exports = answerRouter = Router();

const questionController = new AnswerQuestion();
answerRouter.route('/questions/:id/answers').post(protect, questionController.answerQuestion);
answerRouter.route('/answers').get(questionController.getAllAnswers);

