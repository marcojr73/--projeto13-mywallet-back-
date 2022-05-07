import db from "../controllers/bank.js"

export default async function validToken(req, res, next) {
    const token = req.headers.authorization.replace("Bearer", "").trim()
    if (!token) return res.status(401).send("Token nao enviado")

    const session = await db.collection("sessions").findOne({ token })
    if (!session) return res.status(402).send("token não encontrado")

    next()
}