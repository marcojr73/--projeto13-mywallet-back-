import bcrypt from 'bcrypt';
import db from '../controllers/bank.js';

export default async function passwordTrue(req, res, next){
    const user = await db.collection("clientes").findOne({email: req.body.email})
    const answer = bcrypt.compareSync(req.body.password, user.password)
    if(!answer) {
        res.status(500).send("Senha incorreta")
        return
    }
    next()
}