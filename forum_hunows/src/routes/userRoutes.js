const express = require("express");
const UserController = require('../controllers/UserController');
const QuestionController = require('../controllers/QuestionController')
const protect = require('../middlewares/auth');
const userValidations = require('../schemas/userSchema');

const router = express.Router();

router.route("/").post(userValidations, UserController.userRegister);
router.route("/login").post(UserController.userLogin);
router.route("/").get(protect, UserController.getAllUsers);
router.route("/question").post(QuestionController.registerAsk);
router.route("/question/listAll").get(QuestionController.getAllQue);

module.exports = router;
