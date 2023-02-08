const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new mongoose.Schema(
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
      required: true
    },
    nameUser: {
      type: mongoose.Schema.Types.nameUser,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  
);

module.exports = mongoose.model('question', questionSchema);