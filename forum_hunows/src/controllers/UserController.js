const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

module.exports = class UserController {

    async registerAccount(req, res) {
        const { name, email, password } = req.body;

        try {
            const findUserByEmail = await User.findOne({ email });
            if (findUserByEmail)
                return res.status(400).send({ error: 'User already exists' });

            const user = await User.create({
                name,
                email,
                password
            });

            delete user.password;

            return res.status(201).send({ user })
        } catch (err) {
            return res.status(400).json(err)
        }
    }

    async userLogin(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        const validatePassword = await bcrypt.compare(password, user.password);

        if (!user)
            return res.status(400).send({ error: 'User or password invalids.' });

        if (!validatePassword)
            return res.status(400).send({ error: 'User or password invalids.' });

        delete user.password;

        const token = jwt.sign({ id: user.id }, "kmdKw9ehknwDMn29w2whn2oewQWK", {
            expiresIn: 14400,
        });

        res.send({ token });
    }

    async all(req, res) {
        const users = await User.find();
        return res.status(200).json(users);
    }
}