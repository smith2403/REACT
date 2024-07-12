const userModel = require("../models/u_signup");

const sign_up = async (req, res) => {
  try {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const result = await newUser.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sign_up;
