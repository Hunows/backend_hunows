const Question = require('../models/Question');

module.exports = class QuestionController {
    async registerAsk(req, res) {
        try {
            const { title, questionBody, tags } = req.body;
            const { user } = req;
            console.log(title, questionBody, tags,user._id,user._name,answerId._id);
            const saveQuestion = await model.Question.create ({
              title,
              questionBody,
              tags,
              userId: user._id,
              nameUser:user._nome,
              answerId: answer._id
            });
            return successResponse(res, 200, {
                status: true,
                message: 'Successfully Posted Question',
                data: saveQuestion
              });
            } catch (error) {
              return errorResponse(res, 500, error.message);
            }
          }

  async getAllQue(req, res) {
    try {
      const allQue = await model.Question.find({});
      if (allQue.length > 0) {
        return successResponse(res, 200, {
          status: true,
          message: 'All questions',
          data: allQue
        });
      }
      successResponse(res, 200, 'No questions available ');
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }

  async getAllId(req, res) {
    const { id } = req.params;
    try {
      const question = await model.Question.findOne({
          _id: id,
      })
    return successResponse(res, 200, 'Successfully id');
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

async registerStatus(req, res) {
  try {
      const { questionStatus } = req.body;
      console.log(questionStatus);
      const saveQuestionStatus = await Question.updateOne({
        required: boolean,
      });
      return successResponse(res,  {
          status: true,
          message: 'Accepted answer',
          data: saveQuestionStatus
        });
      } catch (error) {
        return successResponse(res, {
          status: false,
          message: 'Not accepted answer',
          data: saveQuestionStatus
        });
      }
    }
}
