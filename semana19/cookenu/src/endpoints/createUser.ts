import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { idGenerator } from '../services/idGenerator'

export const createUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { name, email, password } = req.body

        const newUser = {
            id: idGenerator(),
            name,
            email,
            password: createHash(password)
        }
        
        await connection('User')
                        .insert(newUser)
    
                        const token: string = generateToken(newUser.id)
    
        res
            .status(200).send({newUser, token})
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}