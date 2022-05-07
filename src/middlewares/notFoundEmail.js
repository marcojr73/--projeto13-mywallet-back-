import db from "../controllers/bank.js"

export default async function notFoundEmail(req, res, next){
    const user = await db.collection("clientes").findOne({email: req.body.email})
    if(!user){
        res.status(500).send("Email não cadastrado")
        return
    }
    next()
}