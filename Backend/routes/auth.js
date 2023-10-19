const authController = require("../controller/auth");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const User = require("../model/user");

router.post("/login", authController.login);
router.post("/signup",
    [
        body('userEmail').
            isEmail().
            withMessage("Please enter a valid email").
            custom((value, { req }) => {
                return User.findOne({ email: value }).
                    then(result => {
                        if (result) {
                            return Promise.reject("User already exists");
                        }
                    });
            }).
            normalizeEmail(),
        body('userName').
            trim().
            not().
            isEmpty().
            withMessage("Please enter a name"),
        body("userPassword").
            trim().
            isLength({ min: 5 }).
            withMessage("The password must atleast be 5 characters long.")

    ]
    , authController.signup);

module.exports = router;