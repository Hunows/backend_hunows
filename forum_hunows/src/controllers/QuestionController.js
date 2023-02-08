const User = require('../models/User');
const Question = require('../models/Question');

module.exports =  {
    async registerAsk(req, res) {
        try {
            const { title, questionBody, tags } = req.body;
            const { user } = req;
            console.log(title, questionBody, tags, user._id);
            const saveQuestion = await Question.create({
              title,
              questionBody,
              tags,
              userId: user
            });
            console.log(saveQuestion);
            return successResponse(res, 200, {
                status: true,
                message: 'Successfully Posted Question',
                data: saveQuestion
              });
            } catch (error) {
              return res.status(500).json(error.message);
            }
          },

  async getAllQue(req, res) {
    try {
      const allQue = await Question.find({});
      if (allQue.length > 0) {
        return res.status(200).json({
          status: true,
          message: 'All questions',
          data: allQue
        });
      }
      return res.status(200).json({ message: 'No questions available' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};
