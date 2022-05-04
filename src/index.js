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

app.post("/log-in", async (req, res) => {

    try{
        const user = await db.collection("clientes").findOne({email: req.body.email})
        if(!user){
            res.status(500).send("Email não cadastrado")
            return
        }
        const answer = bcrypt.compareSync(req.body.password, user.password)
        if(answer){
            res.sendStatus(200)
            return
        } else {
            res.status(500).send("Senha incorreta")
            return
        }

    } catch (e) {
        res.status(500).send("ocorreu um erro")
    }  
})


const port = process.env.port
app.listen(port, () => {
    console.log("servidor em pé na porta ", port)
})
