import { Request, response, Response } from 'express'
import app from '../app'
import axios from 'axios'
import { userAdress } from '../types'


export const getAdressInfo = async (cep: string) : Promise<userAdress | null> => {
try {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    const adress: userAdress = {
        locality: res.data.logradouro,
        neighborhood: res.data.bairro,
        city: res.data.localidade,
        state: res.data.uf
    }
    return adress
} catch{
    return null
}
}

// export const createAdress = async (req: Request, res: Response) : Promise<object> => {
//     const {}
// }