const User = require("../model/user");
const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")


exports.login = (req, res, next) => {
    const email = req.body.userEmail;
    const password = req.body.userPassword;
    let loadedUser;
    console.log("I am triggered")
    User.findOne({ email: email })
        .then(userDoc => {
            if (!userDoc) {
                const error = new Error("A user with this email could not be found.")
                error.statusCode = 404;
                throw error;
            }

            loadedUser = userDoc;

            return bcrypt.compare(password, userDoc.password);
        }).then(isEqual => {
            if (!isEqual) {
                const error = new Error("Wrong password entered.")
                error.statusCode = 401;
                error.result = "Failure"
                error.messsage = "Wrong password entered"
                throw error;
            }

            const token = jwt.sign(
                {
                    email: email,
                    userId: loadedUser._id.toString()
                }, '#&@^@^@*&^#&@secret(!)$*@^*QE',
                { expiresIn: '1h' })

            res.status(200).json({ token: token, userId: loadedUser._id.toString(), result: "Success", message: "Logged in!", status:200 });
        }).
        catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
              }
            next(err);
        })

};



exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error("Validation error");
        error.status = 501;
        error.data = errors.array();
        throw error;
    }
    const name = req.body.userName;
    const email = req.body.userEmail;
    const password = req.body.userPassword;


    bcrypt.hash(password, 12)
        .then(hashedPw => {
            User.find({ email: email }).
                then(result => {
                    if (result.length === 0) {
                        const newUser = new User({
                            name: name,
                            email: email,
                            password: hashedPw
                        });

                        return newUser.save()
                            .then(() => {
                                res.status(200).json({ status: 200,  message: "User was created", result: "success" })
                            })
                            .catch(err => {
                                res.status(500).json({status: 500, message: "User could not be created" }, {result: "Failure"})
                            });
                    } else {
                        res.status(409).json({ status:409, message : "USER already exists", result: "Failure" })
                    }
                });
        }).
        catch(err => {
            if (!err.statusCode) {
                err.statusCode = 400;
            }
            next(err);
        });
}