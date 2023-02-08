const express = require('express');
const questionRoutes = require('./routes/QuestionRoutes');
const routes = require('./routes/userRoutes');
const { errors } = require('celebrate');

const app = express();

app.use(express.json());

app.use("/api/users", routes);

app.use("/registerAsk", routes);

app.use("/questionLists",routes);

app.use(errors());

module.exports = app;