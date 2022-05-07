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

    try {
        await db.collection("clientes").insertOne(user)
        res.sendStatus(201)
    } catch (e) {
        res.send("erro ao cadastrar o usuário")
    }
}