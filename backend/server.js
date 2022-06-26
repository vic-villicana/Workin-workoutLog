require("dotenv").config();
const express = require("express");
const app = express()
const cors = require("cors")
const db = require("./db");

app.use(cors())
app.use(express.json())

app.get('/allexercises', async(req, res) => {
  
})

app.get("/workoutlogs/:id", async (req, res) => {
   
})    

app.get("/myworkouts", async (req, res) => {
  
    
})

app.get("/myworkouts/:id", async (req, res) => {
    
})

app.post("/myworkouts", async (req, res) => {
    
})

app.put("/myworkouts/:id", async(req, res) => {
    
})

app.delete("/myworkouts/:id", (req, res) => {

})

const port = process.env.PORT
app.listen(port, () => {
    console.log("Listening")
})