import db from "./bank.js";

export async function historicUser(req, res){
    try {
        const token = req.headers.authorization.replace("Bearer", "").trim()
        if(!token) return res.status(401).send("Token nao enviado")

        const session = await db.collection("sessions").findOne({token})
        if(!session) return res.status(402).send("token não encontrado")

        const historic = await db.collection("historic").find({id: session.id}).toArray()
        let amount = 0
        for(let i = 0; i<historic.length; i++){
            console.log(historic[i].type)
            console.log(historic[i].valueTrading)
            if(historic[i].type == "input"){
                amount = amount + parseFloat(historic[i].valueTrading)
            } else {
                amount = amount - parseFloat(historic[i].valueTrading)
            }
        }
        res.status(200).send({historic, amount})
    } catch (e) {
        res.status(404).send("ocorreu um erro")
    }
}