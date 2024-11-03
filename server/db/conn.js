const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("connection successfully started")
}).catch((e) => {
    console.log("something went wrong", e)
})