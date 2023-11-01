const todo = require("../model/todo")
const user = require("../model/user")
const mongoose = require("mongoose");
const recycledToDo = require('../model/recycledToDo')

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

exports.getAddToDo = (req, res, next) => {
    const userId = req.query.user;

    todo.find({ user: userId })
        .then((todos) => {
            if (!todo) {
                const error = new Error("Couldn't find any todos");
                error.status = 404;
                error.result = "Failure"
                error.message = "Couldn't find any todos"
                throw error
            }

            res.json({ status: 200, todos: todos });
        })
        .catch(err => {
            res.status(500).json({ error: "Internal Server Error" });
        });

}

exports.deleteToDo = (req, res, next) => {
    const todoId = req.query.todoId;

    todo.findByIdAndRemove({ _id: todoId }).
        then(todo => {
            if (!todo) {
                const error = new Error("Todo couldn't be found")
                error.status = 404,
                    error.result = "Failure"
                error.message = "Coudn't find todo"
                throw error
            }

            const newRecycledTodo = new recycledToDo({
                content: todo.content,
                creationDate: todo.creationDate,
                lastEdited: todo.lastEdited,
                user: todo.user
            })
            newRecycledTodo.save()

            return res.status(200).json({
                result: "Success",
                message: "Todo was deleted", task: "deleted todo"
            })
        }).
        catch(error => {
            next(error);
        });
}

exports.getRecycledToDo = (req, res, next) => {
    const userId = req.query.userId;
    recycledToDo.find({ user: userId }).
        then(todo => {
            if (!todo) {
                const error = new Error("Couldn't find any todos");
                error.status = 404;
                error.result = "Failure"
                error.message = "Couldn't find any todos"
                throw error
            }

            return res.status(200).json({ recycledToDos: todo })

        }).
        catch(error => {
            next(error)
        })
}

exports.deleteRecycledToDo = (req, res, next) => {
    const todoId = req.query.todoId;

    recycledToDo.findByIdAndRemove({ _id: todoId }).
        then(todo => {
            if (!todo) {
                const error = new Error("Todo couldn't be found")
                error.status = 404,
                    error.result = "Failure"
                error.message = "Coudn't find todo"
                throw error
            }

            return res.status(200).json({
                result: "Success",
                message: "Todo was deleted permanently", task: "deleted recycledtodo"
            })


        }).
        catch(error => {
            next(error)
        });
}

exports.restoreRecycledTodo = (req, res, next) => {
    const todoId = req.query.todoId;

    recycledToDo.findOneAndRemove({ _id: todoId }).
        then(result => {
            if (!result) {
                const error = new Error("Todo couldn't be found")
                error.status = 404,
                    error.result = "Failure"
                error.message = "Coudn't find todo"
                throw error
            }

            const newTodo = new todo({
                content: result.content,
                creationDate: result.creationDate,
                lastEdited: result.lastEdited,
                user: result.user
            })
            newTodo.save().then(() =>{}).catch(err => next(err));

            
            return res.status(200).json({ message: "Todo was restored successfully!", result: "Success", status: 200, task: "restore todo" })

        }).
        catch(error => {
            next(error)
        })
}