const express = require("express");
const questionRoutes = require("./routes/QuestionRoutes");
const answerRouter = require('./routes/answersRoutes');
const routes = require("./routes/userRoutes");
const { errors } = require("celebrate");

const app = express();
app.use(express.json());
app.use("/api/users", routes);
app.use(questionRoutes);
app.use(answerRouter);
app.use(errors());

module.exports = app;
