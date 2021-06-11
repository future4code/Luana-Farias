import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";


export const getProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.auth as string

        const id = getTokenData(token)

        const findUser = await connection('User')
                            .where({ id })
       
        if(findUser) {
            res.status(200).send(findUser)
        } 

        res.status(200).send({ token })

        } catch (err) {
            if (err.message.includes("invalid token")) {
                res.send("Não autorizado.")
            } else {
                res.send({message: err.message})
            }
        }
    }
