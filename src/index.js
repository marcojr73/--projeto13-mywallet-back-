import express, { text } from "express";
import cors from "cors"
import {MongoClient} from "mongodb"
import dotenv from "dotenv"
import bcrypt from 'bcrypt';

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const mongoClient = new MongoClient(process.env.mongo_url)
await mongoClient.connect()
let db = mongoClient.db("test")

app.post("/sig-in", async (req, res) => {
    const passCript = bcrypt.hashSync(req.body.password, 10);

    const user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        password: passCript
    }

    try {
        const exist = await db.collection("clientes").findOne({email: user.email})
        console.log(exist)
        if(exist){
            res.status(404).send("Email já cadastrado")
            return
        }
        await db.collection("clientes").insertOne(user)
        res.sendStatus(201)
    } catch (e) {
        res.send("erro ao cadastrar o usuário")
    }
})

const port = process.env.port
app.listen(port, () => {
    console.log("servidor em pé na porta ", port)
})
