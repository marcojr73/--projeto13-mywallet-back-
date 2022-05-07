import db from "./bank.js";

export async function historicUser(req, res){
    try {
        const token = req.headers.authorization.replace("Bearer", "").trim()
        const session = await db.collection("sessions").findOne({ token })
        const historic = await db.collection("historic").find({id: session.id}).toArray()
        let amount = 0
        for(let i = 0; i<historic.length; i++){
            if(historic[i].type == "input"){
                amount = amount + parseFloat(historic[i].valueTrading)
            } else {
                amount = amount - parseFloat(historic[i].valueTrading)
            }
        }
        delete historic._id
        delete historic.id
        
        res.status(200).send({historic, amount})
    } catch (e) {
        res.status(404).send("ocorreu um erro")
    }
}