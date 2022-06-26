require("dotenv").config();
const express = require("express");
const app = express()
const cors = require("cors")
const db = require("./db")
const v1routes = require('./src/v1/routes/workoutRoutes.js')

app.use(cors())
app.use(express.json())

app.use('/v1', v1routes);

const port = process.env.PORT
app.listen(port, () => {
    console.log("Listening")
})