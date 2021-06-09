import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";
import { getAdressInfo } from "./getAdressInfo";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role, complement } = req.body
      const cep = req.body.cep
      const number = req.body.number

      if (!name || !nickname || !email || !password || !role || !cep || !number) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email', cep, número e 'role'")
      }

      if(role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
      }

      const [user] = await connection('user_table_name')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);

      const newUser: user = { id, name, nickname, email, password: cypherText, role, cep, number }

      await connection('user_table_name')
         .insert(newUser)

      const token: string = generateToken({ id, role })

      res.status(201).send({ token })

      const adress = getAdressInfo(cep)

      await connection('user_table_adress')
         .insert(adress)

   } catch (error) {
      console.log("aqui", req.body)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}