const todo = require("../model/todo")
const user = require("../model/user")
const mongoose = require("mongoose");

exports.addToDo = async (req, res, next) => {
    try {
        const todoContent = req.body.todoContent;
        const creationDate = req.body.creationDate;
        const lastEditedDate = req.body.lastEditedDate;
        const userId = req.body.userId

        const newToDo = new todo({
            content: todoContent,
            creationDate: creationDate,
            lastEdited: lastEditedDate,
            user: userId
        });


        if (todoContent.length > 150 || todoContent.length < 5) {
            throw new Error("Todo content length should not exceed 150 characters");
        }
        await newToDo.save()

        const foundUser = await user.findById(userId);
        if (!foundUser) {
            throw new Error("Couldn't find the user");
        } else {
            foundUser.todos.push(newToDo);
            await foundUser.save();
        }

        return res.status(200).json({ message: "Todo was added successfully!", result: "Success", status: 200, task: "add todo" })
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", result: "Failure", status: 500, task: "add todo" });
    }
};

exports.getAddToDo =  (req, res, next) => {
    const userId = req.query.user; 

    todo.find ({ user: userId })
        .then((todos) => {
            res.json({ status: 200, todos: todos }); 
        })
        .catch(err => {
            res.status(500).json({ error: "Internal Server Error" }); 
        });

}
