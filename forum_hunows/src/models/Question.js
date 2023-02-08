const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  title: {
    max: 50,
    type: String,
    required: true,
  },
  questionBody: {
    max: 5000,
    type: String,
    required: true,
  },
  tags: {
    min: 1,
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: [true, "question must have a User id"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Question = mongoose.model("Questions", QuestionSchema);

module.exports = Question;
