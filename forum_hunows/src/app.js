const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json(),
    userRoutes)

module.exports = app;