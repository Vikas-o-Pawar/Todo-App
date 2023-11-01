const express = require("express")
const router = express.Router();
const userFunctionalityController = require("../controller/userFunctionality.js")
const isAuth = require("../middleware/is-auth.js")


router.post("/addToDo", isAuth, userFunctionalityController.addToDo);

router.get("/getAddToDo", isAuth, userFunctionalityController.getAddToDo);

router.delete("/deleteToDo", isAuth, userFunctionalityController.deleteToDo)

router.get("/getRecycledToDo", isAuth, userFunctionalityController.getRecycledToDo)

router.delete("/deleteRecycledToDo", isAuth, userFunctionalityController.deleteRecycledToDo)

router.delete("/restoreRecycledTodo", isAuth, userFunctionalityController.restoreRecycledTodo)

module.exports = router