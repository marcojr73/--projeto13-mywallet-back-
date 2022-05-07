import { Router } from "express";
import { trading } from "../controllers/trading.js";

const tradingRouter = Router()

tradingRouter.post("/trading", trading)

export default tradingRouter
