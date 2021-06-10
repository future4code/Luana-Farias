import { Request, Response } from "express";
import connection from "../connection";
import { idGenerator } from '../services/idGenerator'

// export const createUser = (req: Request, res: Response) : Promise<object> => {
//     const { name, email, password } = req.body
//     const id = idGenerator()

//     const user = await connection('')
// }