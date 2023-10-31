const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./util/database");

app.use(bodyParser.urlencoded({ extended: false })); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    const result = error.result // failure or success
    res.status(status).json({result: result, message: message, data: data})
})

// routes

// authorization route
const authRoute = require("./routes/auth")
const userFeaturesRoute = require("./routes/userFunctionality")

app.use(authRoute);
app.use(userFeaturesRoute)

app.listen(8080);
// app.listen(8080, '0.0.0.0', () => {
//     // console.log('Server is running on port 8080');
//   });