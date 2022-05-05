import express, { text } from "express";
import cors from "cors"
import dotenv from "dotenv"
import { v4 as uuid } from "uuid";

// import db from "./controllers/bank.js";
import { sigInUser } from "./controllers/sigInUser.js";
import { logInUser } from "./controllers/logInUser.js";

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()



app.post("/sig-in", sigInUser)

app.post("/log-in", logInUser)


const port = process.env.port
app.listen(port, () => {
    console.log("servidor em pé na porta ", port)
})
