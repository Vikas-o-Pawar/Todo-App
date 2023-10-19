const User = require("../model/user");
const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")


exports.login = (req, res, next) => {
    const email = req.body.userEmail;
    const password = req.body.userPassword;
    let loadedUser;

    User.findOne({ email: email })
        .then(userDoc => {
            if (!userDoc) {
                const error = new Error("A user with this email could not be found.")
                error.statusCode = 401;
                throw error;
            }

            loadedUser = userDoc;

            return bcrypt.compare(password, userDoc.password);
        }).then(isEqual => {
            if (!isEqual) {
                const error = new Error("Wrong password entered.")
                error.statusCode = 401;
                throw error;
            }

            const token = jwt.sign(
                {
                    email: email,
                    userId: loadedUser._id.toString()
                }, '#&@^@^@*&^#&@secret(!)$*@^*QE',
                { expiresIn: '1h' })

            res.status(200).json({ token: token, userId: loadedUser._id.toString() });
        }).
        catch(err => {
            console.log(err);
        })

};



exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
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
                                res.status(200).json({ status: "User was created" })
                            })
                            .catch(err => {
                                res.status(500).json({ status: "User could not be created" })
                            });
                    } else {
                        res.status(500).json({ status: "USER already exists" })
                    }
                });
        }).
        catch(err => {
            console.log(err);
        })
}