import { Request, Response } from "express"
import connection from "../connection"
import { getTokenData } from "../services/authenticator"


export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params 
    const token = req.headers.auth  as string

    const validateToken = getTokenData(token)
    
    const [user] = await connection("User")
        .where({ id })

    const {id: userId, name, email } = user
    
        if(validateToken) {
            res.status(200).send({userId, name, email})
        } 
    } catch (err) {
        if(err.message.includes("invalid token")) {
            res.status(501).send("Não autorizado")
        } else {
            res.status(501).send({message: err.message})
        }
        
    }

    }