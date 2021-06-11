import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { createHash } from "../services/hashManager";
import { idGenerator } from '../services/idGenerator'
import { User } from "../types";

export const createUser = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { name, email, password } = req.body

        const newUser: User = {
            id: idGenerator(),
            name,
            email,
            password: createHash(password)
        }

        const missingBody = !name || !email || !password

        if(missingBody) {
            throw new Error("Preencha todos os campos: nome, email e senha.")
        }
        
        await connection('User')
                        .insert(newUser)
    
                        const token: string = generateToken(newUser.id)

        res
            .status(200).send({newUser, token})
    } catch (err) {
        if(err.message.includes('Duplicate entry for key "email"')) {
            res.status(500).send("Email já cadastrado.")
            // res.status(500).send({message: err.message})
        } else {
            res.status(500).send({message: err.message})
        } 
        
    }
}