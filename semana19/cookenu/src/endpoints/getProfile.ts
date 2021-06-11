import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";


export const getProfile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.auth as string

        const tokenId = getTokenData(token)

        const findUser = await connection('User')
                            .where({ id: tokenId })

        const [{id, name, email}] = findUser

        const newUser = {id, name, email}
       
        if(findUser) {
            res.status(200).send(newUser)
        } 

        } catch (err) {
            if (err.message.includes("invalid token")) {
                res.send("Não autorizado.")
            } else {
                res.send({message: err.message})
            }
        }
    }
