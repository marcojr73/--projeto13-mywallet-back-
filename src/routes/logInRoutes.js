import { Router } from "express";
import {logInUser} from "../controllers/logInUser.js"
import notFoundEmail from '../middlewares/notFoundEmail.js';
import passwordTrue from "../middlewares/passwordTrue.js";

const logRouter = Router()

logRouter.post("/log-in",notFoundEmail, passwordTrue, logInUser)

export default logRouter