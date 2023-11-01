const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    content: {
        required: true,
        type: String
    },
    creationDate: {
        required: true,
        type: Date,
    },
    lastEdited: {
        required: true,
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model("RecycledToDo", todoSchema);