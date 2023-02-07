const { Router } = require('express');
const QuestionController = require('../controllers/UserController');
const QuestionController = require('../controllers/QuestionController');
const protect = require('../middlewares/authentication');

module.exports = questionRouter = Router();

const questionController = new QuestionController();
questionRouter.post('/registerAsk', questionController.registerAsk);
questionRouter.route("/registerAsk").post(protect,questionController.registerAsk);
questionRouter.route("/registerAsk").get(questionController.getAllQue);



