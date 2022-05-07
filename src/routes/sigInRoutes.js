import {Router} from "express"
import {sigInUser} from "../controllers/sigInUser.js"

const sigRouter = Router()

sigRouter.post("/sig-in", sigInUser)

export default sigRouter