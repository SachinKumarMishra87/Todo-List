const TodoModel = require("../models/todoModel");

// Get all todos
module.exports.getTodos = async (req, res) => {
    try {
        const toDos = await TodoModel.find();
        res.send(toDos);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Save a new todo
module.exports.saveTodos = async (req, res) => {
    const { toDo } = req.body;

    TodoModel.create({ toDo }) // Using toDo directly as per schema
        .then(data => {
            console.log("Saved successfully..");
            res.send(data); // Send back the saved document as a response
        })
        .catch((e) => {
            console.log("Something went wrong", e);
            res.status(500).send("Internal Server Error");
        });
};

// Update an existing todo
module.exports.updateTodos = async (req, res) => {
    const { id } = req.params;
    const { toDo } = req.body;

    TodoModel.findByIdAndUpdate(id, { toDo }, { new: true }) // Using toDo directly
        .then(data => {
            console.log("Updated successfully..");
            res.send(data); // Send the updated document as a response
        })
        .catch((e) => {
            console.log("Something went wrong", e);
            res.status(500).send("Internal Server Error");
        });
};

// Delete a todo
module.exports.deleteTodos = async (req, res) => {
    const { id } = req.params;

    TodoModel.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted successfully..");
            res.send("Deleted successfully..");
        })
        .catch((e) => {
            console.log("Something went wrong", e);
            res.status(500).send("Internal Server Error");
        });
};
