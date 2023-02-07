const User = require('../models/User');

module.exports = class UserController {
    async registerAsk(req, res) {
        try {
            const { title, questionBody, tags } = req.body;
            const { user } = req;
            console.log(title, questionBody, tags,user._id);
            const saveQuestion = await model.Question.create ({
              title,
              questionBody,
              tags,
              userId: user._id
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
};
