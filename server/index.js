const express = require('express');
const cors = require("cors");
const routes = require("./routes/route")
require("./db/conn");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(cors())

app.use("/api",routes)

app.listen(port, () => {
    console.log(`server start at ${port}`)
})