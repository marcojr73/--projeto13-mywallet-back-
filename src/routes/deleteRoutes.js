import { Router } from "express";
import { deleteTrading } from "../controllers/deleteTrading.js";
import validToken from "../middlewares/validToken.js";

const deleteRouter = Router()

deleteRouter.delete("/delete:id",validToken, deleteTrading)

export default deleteRouter