const Question  = require('../models/Question');

module.exports = class QuestionController {
    async registerAccount(req, res) {
        const { email } = req.body;

        try {
            const findUserByEmail = await User.findOne({ email });
            if (findUserByEmail)
                return res.status(400).send({ error: 'User already exists' });

            const user = await User.create(req.body);

            delete user.password;

            return res.send({ user })
        } catch (err) {
            return res.status(400).send({ error: 'Registration failed.' })
        }
    }
}