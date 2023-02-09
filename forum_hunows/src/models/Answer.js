const mongoose = require("mongoose");


const AnswerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "You need an account to answer this question"],
  },

  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Questions',
    required: true,
  },
  answerBody: {
    type: String,
    max: 5000,
    required: [true, "Your answer must have a text"],
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

const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;
