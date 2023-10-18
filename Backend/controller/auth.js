const User = require("../model/user");
const bcrypt = require("bcryptjs")

exports.login = (req, res, next) => {
    const email = req.body.userEmail;
    const password = req.body.userPassword;

    User.find({email: email})
    .then(result => {
        if(!result) {
            res.status(404).json({status: "User Not Found."})
        };

        if(password === result.password) {
            res.status(200).json({status: "successful"})
        }


    })
    .catch(err => {
        console.log(err)
    })
    res.status(200).json({status: "successful"});
};



exports.signup = (req, res, next) => {
    const name = req.body.userName;
    const email = req.body.userEmail;
    const password = req.body.userPassword;


    bcrypt.hash(password, 12)
    .then(hashedPw => {
        User.find({email: email}).
        then(result => {
            if(result.length === 0) {
                const newUser = new User({
                    name: name,
                    email: email,
                    password: hashedPw
                });
    
                return newUser.save()
                .then(() => {
                    res.status(200).json({status: "User was created"})
                })
                .catch(err =>{
                    res.status(500).json({status: "User could not be created"})
                });
            } else {
                res.status(500).json({status: "USER already exists"})
            }                
        });
    }).
    catch(err => {
        console.log(err);
    })
}