const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const app = require("./app");
const mongoose = require("mongoose");

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

mongoose
  .connect("mongodb://mongouser:mongopass@hunowsdb:27017")
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3007, function () {
      console.log("Accounts server is running in port 3007");
    });
  })
  .catch((err) => console.log(err));
