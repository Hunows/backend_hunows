const express = require("express");
const UserController = require('../controllers/UserController');
const QuestionController = require('../controllers/QuestionController')
const protect = require('../middlewares/auth');

const router = express.Router();

router.route("/").post(UserController.userRegister);
router.route("/login").post(UserController.userLogin);
router.route("/").get(protect, UserController.getAllUsers);

module.exports = router;
