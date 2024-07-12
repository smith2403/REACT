const express = require("express");
const sign_up = require("../controllers/u_signup");

const router = express.Router();

router.post("/", sign_up);

module.exports = router;
