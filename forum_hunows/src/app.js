const express = require('express');
const routes = require('./routes/userRoutes');
const questionRoutes = require('./routes/QuestionRoutes');

const app = express();

app.use(express.json());

app.use("/api/users", routes)
app.use("/api/users", questionRoutes)

app.use(express.json());


module.exports = app;