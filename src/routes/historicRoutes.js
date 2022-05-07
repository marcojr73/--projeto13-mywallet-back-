import { Router } from "express";
import { historicUser } from "../controllers/historicUser.js";

const historicRouter = Router()

historicRouter.get("/historic", historicUser)

export default historicRouter