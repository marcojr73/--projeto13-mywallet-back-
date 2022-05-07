import { Router } from "express";
import {logInUser} from "../controllers/logInUser.js"

const logRouter = Router()

logRouter.post("/log-in", logInUser)

export default logRouter