const { Router } = require('express');
const UserController = require('../controllers/UserController');

module.exports = userRouter = Router();

const userController = new UserController();
userRouter.post('/register', userController.registerAccount);