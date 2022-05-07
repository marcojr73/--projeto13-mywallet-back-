import { v4 } from "uuid";
import db from "./bank.js";


export async function logInUser(req, res) {
    const user = await db.collection("clientes").findOne({email: req.body.email})
    try {
        const token = v4()
        await db.collection("sessions").insertOne({
            token: token,
            id: user.id
        })
        res.status(200).send({ token, name: user.name })
    } catch (e) {
        res.status(500).send("ocorreu um erro")
    }
}