import { ObjectId } from "bson";
import db from "./bank.js";

export async function deleteTrading(req, res){
    try {
        let id = req.params.id.slice(1)
        await db.collection("historic").deleteOne({_id: new ObjectId(id)})
        res.status(200).send("trading deletado")
    } catch (e) {
        res.status(404).send("ocorreu um erro")
    }
}