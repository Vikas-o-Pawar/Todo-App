const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    // if the authorization is not there, then the user is not authenticated
    const authHeader = req.get("Authorization")

    if (!authHeader) {
        const error = new Error("Not authenticated");
        error.statusCode = 401;
        throw error
    }

    const token = authHeader.split(' ')[1]; // we get the token in here
    let decodedToken;

    try {
        // verify will decode and verify the token
        decodedToken = jwt.verify(token, "#&@^@^@*&^#&@secret(!)$*@^*QE")
    } catch (error) {
        error.statusCode = 500;
        throw error
    }

    if (!decodedToken) {
        // if the decoded token is undefined
        const error = new Error("Not authenticated");
        error.statusCode = 401;
        throw error
    }

    req.userId = decodedToken.userId // this userId field is stored in the token when it is created
    next();
};