const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://mongouser:mongopass@hunowsdb:27017")
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3007, function () {
      console.log("Accounts server is running in port 3007");
    });
  })
  .catch((err) => console.log(err));
