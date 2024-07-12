const bodyParser = require("body-parser");
const express = require("express");
const connectMongo = require("./connection");
const u_signupRoutes = require("./routing/u_signup");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectMongo();

app.use("/api/user", u_signupRoutes);

app.listen(4000, () => {
  console.log("server is running");
});
