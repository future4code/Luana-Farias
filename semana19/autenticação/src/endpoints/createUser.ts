import connection from "../connection"
import { Request, Response } from 'express'
import { idGenerator } from "../services/idGenerator"


export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {name, nickname, email, password} = req.body
        const id = idGenerator()
    
        await connection.insert({ id, name, nickname, email, password }).into('user_table_name')
        res
            .status(200)
            .send({ message: "Sucesso!" })
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}