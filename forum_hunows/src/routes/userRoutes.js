const { Router } = require('express');
const UserController = require('../controllers/QuestionController');

module.exports = userRouter = Router();

const userController = new UserController();
userRouter.post('/register', userController.registerAccount);
