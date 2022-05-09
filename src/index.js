import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import logRouter from "./routes/logInRoutes.js";
import sigRouter from "./routes/sigInRoutes.js";
import historicRouter from "./routes/historicRoutes.js";
import tradingRouter from "./routes/tradingRoutes.js";
import deleteRouter from "./routes/deleteRoutes.js";

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(sigRouter)

app.use(logRouter)

app.use(historicRouter)

app.use(tradingRouter)

app.use(deleteRouter)

const port = process.env.port
app.listen(port, () => {
    console.log("servidor em pé na porta ", process.env.PORT)
})
