const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    todos: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Todo'
            }
        ],
    recycledTodos: [
        {
            type: Schema.Types.ObjectId,
            ref: "Todo"
        }
    ]

})

module.exports = mongoose.model("User", userSchema)