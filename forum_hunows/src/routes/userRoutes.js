const { Router } = require('express');
const UserController = require('../controllers/QuestionController');
const UserController = require('../controllers/UserController');
const protect = require('../middlewares/authentication');

module.exports = userRouter = Router();

const userController = new UserController();
userRouter.post('/register', userController.registerAccount);
userRouter.route("/register").post(userController.registerAccount);
userRouter.route("/users").get(protect, userController.all);
userRouter.route("/login").post(userController.userLogin);
