import { connection } from './connection'
import express from 'express'
import { Request, Response } from 'express'

const app = express()
app.use(express.json())

app.put('/user', async (req: Request, res: Response) => {
    try {
        await connection.raw(`
        INSERT INTO User (id, name, nickname, email)
        VALUES (
            "${req.body.id}",
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}",
        );
        `)
            res.status(200).send("Created!")
    } catch(err) {
        console.log(err.mesage);
        res.status(500).send("An unexpecteded error occurred.")
    }
})

app.listen(3003, () => {
    console.log("O servidor está rodando na porta 3003.")
});
