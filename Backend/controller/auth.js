exports.login = (req, res, next) => {
    console.log(req.body.userEmail)
    res.status(200).json({status: "successful"});
};

