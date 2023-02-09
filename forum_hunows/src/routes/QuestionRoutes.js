const { Router } = require('express');
const QuestionController = require('../controllers/QuestionController');
const protect = require('../middlewares/auth');

module.exports = questionRouter = Router();

const questionController = new QuestionController();
questionRouter.route("/registerAsk").post(protect, questionController.registerAsk);
questionRouter.route("/QuestionLists").get(questionController.getAllQue);
questionRouter.route("/QuestionLists/:id").get(questionController.getAllId);
questionRouter.route("/Question/:id/Answer/:id").put(protect, questionController.registerStatus);


