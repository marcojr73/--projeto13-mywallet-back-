import { Router } from "express";
import { trading } from "../controllers/trading.js";
import validToken from "../middlewares/validToken.js";

const tradingRouter = Router()

tradingRouter.post("/trading", validToken, trading)

export default tradingRouter
