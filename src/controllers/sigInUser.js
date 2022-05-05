import bcrypt from 'bcrypt';
import db from "./bank.js";

export async function sigInUser(req, res){
    const passCript = bcrypt.hashSync(req.body.password, 10);
    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        password: passCript
    }
    // console.log(user)

    try {
        const exist = await db.collection("clientes").findOne({email: user.email})
        if(exist){
            res.status(404).send("Email já cadastrado")
            return
        }
        const a = await db.collection("clientes").insertOne(user)
        res.sendStatus(201)
    } catch (e) {
        res.send("erro ao cadastrar o usuário")
    }
}