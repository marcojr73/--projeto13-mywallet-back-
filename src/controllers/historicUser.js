import db from "./bank.js";

export async function historicUser(req, res){const token = req.headers.authorization.replace("Bearer", "").trim()
    try {
        const token = res.locals.token
        const session = res.locals.session
        const historic = await db.collection("historic").find({id: session.id}).toArray()
        let amount = 0
        for(let i = 0; i<historic.length; i++){
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