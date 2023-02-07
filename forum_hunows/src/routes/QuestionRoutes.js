const express = require('express');


const router = express.Router();

router.post('/askQuestion',
    userValidators.validateUserToken,
    validation.validateAskQue,
    controller.askQue
);

router.get('/',
    controller.getAllQue
);