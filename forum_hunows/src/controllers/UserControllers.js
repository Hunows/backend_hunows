const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require("../utils/generateToken");

module.exports = {
    async userRegister(req, res) {
        try {
        const { email } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json("Usuário já existe!!");
        }
        
            const user = await User.create(req.body);
            user.password = undefined;
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    async userLogin(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email }).select("+password");
            
            if (!user) {
                return res.status(400).json("Usuário não existe!!");
            }
    
            if (!await bcrypt.compare(password, user.password)) {
                return res.status(400).send({ message: 'Senha inválida' });
            }
    
            user.password = undefined;
    
            return res.json({
                user,
                token: generateToken(user)
            });
        }catch (error) {
            return res.status(500).json(error);
        }
        
    },
    async getAllUsers(req, res) {
        try{
        const users = await User.find();
        return res.status(200).json(users);
    }catch(error) {
        return res.status(500).json(error);
    }
<<<<<<<<< Temporary merge branch 1:forum_hunows/src/controllers/UserControllers.js
}
=========
    }
};