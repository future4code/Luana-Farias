import express, {Express, request, Request, Response} from 'express'
import cors from 'cors'
import { users } from './users'

const app: Express = express()
app.use(express.json())
app.use(cors())

const verifyResult = (param: any) => {
    if(!param) {
        throw new Error("Not found.")
    }
}


app.get('/users/all', (req: Request, res: Response) => {
    try {
        const result = users.map(user => user)

        if(!result.length){
            throw new Error("Users not found.")
        }

        res
            .status(200)
            .send(result)
    } catch (err) {
        res
            .status(400)
            .send( { message: err.message} )
    }
})


app.get('/search', (req: Request, res: Response) => {
    try {
        const type = req.query.type as string
        const result = users.filter((user) => {
        return user.type.toLowerCase().includes(type.toLowerCase())
    })

    if(!result.length){
        throw new Error("Not found.")
    }

        res
            .status(200)
            .send(result)
    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })       
    }
})


app.post('/users/create', (req: Request, res: Response) => {
    try {
        const { id, name, email, type, age } = req.body
        const newUser = {
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res 
            .status(200)
            .send(users)
    } catch (err) {
        res
            .status(400)
            .send( {message: err.message} )
    }
})

app.get('/search/:name', (req: Request, res: Response) => {
    try {
        const name = req.params.name as string
        const result = users.filter((user) => {
        return user.name.toLowerCase().includes(name.toLowerCase())
    })

    if(!result.length){
        throw new Error("Not found.")
    }
    
        res
            .status(200)
            .send(result)
        console.log(result)
    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })       
    }
})


app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))