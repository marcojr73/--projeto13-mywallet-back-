import bcrypt from 'bcrypt';
import db from "./bank.js";
import { v4 } from "uuid";

export async function logInUser(req, res){
    try{
        const user = await db.collection("clientes").findOne({email: req.body.email})
        if(!user){
            res.status(500).send("Email não cadastrado")
            return
        }
        const answer = bcrypt.compareSync(req.body.password, user.password)
        if(answer){
            const token = v4()
            const sessions = await db.collection("sessions").insertOne({
                token: token,
                id: user.id
            })
            res.status(200).send({token, name: user.name})
            return
        } else {
            res.status(500).send("Senha incorreta")
            return
        }

    } catch (e) {
        res.status(500).send("ocorreu um erro")
    }  
}