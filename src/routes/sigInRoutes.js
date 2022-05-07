import {Router} from "express"
import {sigInUser} from "../controllers/sigInUser.js"
import validEmail from "../middlewares/validEmail.js"

const sigRouter = Router()

sigRouter.post("/sig-in",validEmail, sigInUser)

export default sigRouter