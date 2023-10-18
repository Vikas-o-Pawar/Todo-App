const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./util/database");


app.use(bodyParser.urlencoded({extended: false})); // x-www-form-urlencoded <form>
// routes
// login route
const authRoute = require("./routes/auth")


app.use(authRoute);

app.listen(8080);