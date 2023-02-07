const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/users')
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(3000, function () {
            console.log("Accounts server is running in port 3000");
        })
    })
    .catch((err) => console.log(err));