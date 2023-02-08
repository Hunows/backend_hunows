const express = require('express');
const routes = require('./routes/userRoutes');
const { errors } = require('celebrate');

const app = express();

app.use(express.json());

app.use("/api/users", routes);

app.use(errors());

app.use(express.json());

module.exports = app;