import { Router } from "express";
import { historicUser } from "../controllers/historicUser.js";
import validToken from "../middlewares/validToken.js";

const historicRouter = Router()

historicRouter.get("/historic",validToken, historicUser)

export default historicRouter