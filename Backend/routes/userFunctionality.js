const express = require("express")
const router = express.Router();
const userFunctionalityController = require("../controller/userFunctionality.js")
const isAuth = require("../middleware/is-auth.js")


router.post("/addToDo",isAuth, userFunctionalityController.addToDo);

router.get("/getAddToDo", isAuth, userFunctionalityController.getAddToDo);

module.exports = router