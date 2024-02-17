const express = require("express");
const router = express.Router();
const main = require('../controller/main');

const expValidator = require("express-validator");

router.post("/submitform",[
    expValidator
      .body("email", "Email Format Not correct")
      .stripLow()
      .trim()
      .notEmpty()
      .escape()
      .isLength({ max: 60 })
      .normalizeEmail()
      .isEmail(),
    expValidator.body("name", "").stripLow().trim().notEmpty().escape(),
    expValidator.body("message", "").stripLow().trim().notEmpty().escape(),
  ],main.submitForm);

module.exports = router;


