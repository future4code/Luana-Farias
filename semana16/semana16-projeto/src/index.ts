import { connection } from './connection'
import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.put('/user', async (req: Request, res: Response) => {
    try {
        const name = req.body.name as string
        const nickname = req.body.nickname as string
        const email = req.body.email as string
        console.log(name, nickname, email )

        const result: any[] = await connection.raw(`
        INSERT INTO User (name, nickname, email)
        VALUES (
            "${name}",
            "${nickname}",
            "${email}"
        )
        `)

        // const result: any = await connection('User')
        // .insert(req.body)
            res.status(200).send(result)
    } catch(err) {
        console.log(err.message);
        res.status(500).send("An unexpecteded error occurred.")
    }
})

app.get('/getuser', async (req: Request, res: Response) => {
    try {

        const result = await connection.raw(`
        SELECT * FROM User
        `)
            res.status(200).send(result)
    } catch(err) {
        console.log(err.message);
        res.status(500).send("An unexpecteded error occurred.")
    }
})

app.get('/user/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result: any[] = await connection.raw(`
            SELECT name, nickname FROM User WHERE id = ${id}
        `)

        if(!result[0].length) {
            throw new Error("User not found.")
        }
        res.status(200).send(result[0])
    } catch (err) {
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

app.listen(3306, () => {
    console.log("O servidor está rodando na porta 3306.")
});


// id INT PRIMARY KEY AUTO_INCREMENT,