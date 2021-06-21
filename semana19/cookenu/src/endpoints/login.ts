import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { compareHash } from "../services/hashManager";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const missingBody = !email || !password
        if(missingBody) {
            throw new Error("Você precisa digitar um email e uma senha.")
        }

        const [ user ] = await connection('User')
                            .where({ email })

        const isPasswordCorrect = compareHash(password, user.password)

        if(isPasswordCorrect) {
            const token = generateToken(user.id)
            res.status(200).send({ token })
        } else if(!isPasswordCorrect) {
            throw new Error("Digite uma senha válida.")
        }


    } catch (err) {
        res.status(500).send({message: err.message})
    }
    
}