const authController = require("../controller/auth");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const User = require("../model/user");

router.post("/login", authController.login);
router.post("/signup",
[
    body('userEmail')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .normalizeEmail(),
    body('userPassword')
      .trim()
      .isLength({ min: 5 }),
    body('userName')
      .trim()
      .not()
      .isEmpty()
  ]
    , authController.signup);

module.exports = router;