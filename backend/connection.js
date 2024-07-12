const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/u_signup")
    .then(() => console.log("connected to DB.."))
    .catch((err) => console.log(err));
};

module.exports = connectMongo;
