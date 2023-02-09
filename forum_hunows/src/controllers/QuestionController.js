const { response } = require('../app');
const Question = require('../models/Question');


module.exports = class QuestionController {
  async registerAsk(req, res) {
    try {
      console.log(req.params)
      const saveQuestion = await Question.create({
        ...req.body,
        userId: req.userId
      });
      return res.send({ saveQuestion });
    } catch (error) {
      return res.status(400).json({ message: "Erro criando pergunta" });
    }
  }

  async getAllQue(req, res) {
    try {
      const allQue = await Question.find().populate({
        path: 'userId',
        select: 'name'
      });
      if (allQue.length > 0) {
        return res.status(200).json(allQue);
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getAllId(req, res) {
    const { id } = req.params;
    try {
      const question = await Question.findOne({
        _id: id,
      }).populate({
        path: 'userId',
        select: 'name'
      });
      return res.status(200).json(question);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async registerStatus(req, res) {
    try {
      const { id } = req.params;
      const question = Question.findByIdAndUpdate({
        _id: id,
        ...req.body
        })
        return res.send({question});
    } catch (error) {
      return res.status(400).json({ message: "Erro atualizando pergunta" });
    }
    

    
    //  if(!question){
    //   return res.status(404).json({message: 'question not found'})
    //  }
    //  const {questionStatus,answerId} = req.body;
    //  question.update({resolved: questionStatus,answer_id: answerId})

    //  return res.status(200).json(question);

  }


}
