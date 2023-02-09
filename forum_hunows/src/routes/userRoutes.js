const express = require("express");
const UserController = require("../controllers/UserController");
const protect = require("../middlewares/auth");
const userValidations = require("../schemas/userSchema");
const AnswerController = require("../controllers/AnswerController")

const router = express.Router();

router.route("/register").post(userValidations, UserController.userRegister);
router.route("/login").post(UserController.userLogin);
router.route("/").get(protect, UserController.getAllUsers);
router.route("/:id").get(protect, UserController.getUserById);
router.route("/:id").delete(protect,UserController.deleteUserById);
router.route("/:id").put(protect,UserController.putUserById);


module.exports = router;