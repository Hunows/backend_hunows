const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database is connected!");
    app.listen(process.env.PORT, function () {
      console.log("Accounts server is running on port", `${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
