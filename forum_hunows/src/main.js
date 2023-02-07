const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hunowsdb')
    .then(() => {
        console.log('Conectou ao banco!')
        app.listen(3007, function () {
            console.log("Accounts server is running in port 3001");
        })
    })
    .catch((err) => console.log(err));