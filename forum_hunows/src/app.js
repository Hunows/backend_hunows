const express = require('express');
const questionRoutes = require('./routes/QuestionRoutes');
const userRoutes = require('./routes/userRoutes');


const app = express();

app.use(express.json(),
    userRoutes)


app.use(express.json(),
    questionRoutes)


module.exports = app;