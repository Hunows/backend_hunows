const express = require("express");
const questionRoutes = require("./routes/QuestionRoutes");
const routes = require("./routes/userRoutes");
const { errors } = require("celebrate");

const app = express();
app.use(express.json());

app.use(routes);
app.use(questionRoutes);
app.use("/questionLists", questionRoutes);

app.use("/registerAsk", routes);

module.exports = app;
