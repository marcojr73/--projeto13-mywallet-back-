import db from "../controllers/bank.js"
import bcrypt from 'bcrypt';



export default async function validEmail(req, res, next){
    const passCript = bcrypt.hashSync(req.body.password, 10);
    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        password: passCript
    }
    const exist = await db.collection("clientes").findOne({email: user.email})
        if(exist){
            res.status(404).send("Email já cadastrado")
            return
        }
    next()
}