const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
  {
    title: {
      max: 50,
      type: String,
      required: [true, 'Your question must have a title']
    },
    questionBody: {
      max:5000,
      type: String,
      required: [true, 'Your question must have a text']
    },
    tags: {
      min: 1,
      type: String,
      required: [true, 'Your question must have a tags']
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'question must have a User id']
    },
    time : {
        type : Date, 
        default: Date.now 
      },
  },
  
);

const Question = mongoose.model('Questions', QuestionSchema);

module.exports = Question;