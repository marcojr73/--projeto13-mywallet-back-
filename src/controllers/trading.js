import bcrypt from 'bcrypt';
import db from "./bank.js";
import { v4 } from "uuid";
import dayjs from 'dayjs';

export async function trading(req, res){
    try {
        const date =  dayjs().format("DD/MM/YYYY")
        const {valueTrading, description, type} = req.body
        const token = req.headers.authorization.replace("Bearer", "").trim()

        if(!token) return res.status(401).send("Token nao enviado")
        
        const session = await db.collection("sessions").findOne({token: token})
        if(!session) return res.status(402).send("token não encontrado")

        await db.collection("historic").insertOne({ id: session.id,
                                                    date: date,
                                                    description: description,
                                                    valueTrading: valueTrading,
                                                    type: type
        })

        res.status(200).send("informações armazenadas com sucesso")
    } catch (error) {
        res.status(400).send("ocorreu um erro")
    }
}