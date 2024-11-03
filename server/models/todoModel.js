const mongoose = require("mongoose");

const todoSchemas = mongoose.Schema({
    toDo:{
        type:String,
        required: true
    }
})

const TodoModel = mongoose.model('toDo',todoSchemas)
module.exports = TodoModel;