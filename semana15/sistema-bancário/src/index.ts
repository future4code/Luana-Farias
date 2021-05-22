import express, {Express, request, Request, Response} from 'express'
import cors from 'cors'
import { accounts } from './accounts'

const app = express();

app.use(express.json())
app.use(cors())

type User = {
    id?: number,
    name: string,
    cpf: number,
    birth: string
}

type Account = {
    age: number,
    statement: object[],
    balance: number
}

type Extract = {
    value: number,
    date: number,
    description: string
}

const getAge = (string: string) => {
    const birthYear = Number(string.substr(4))
    const date = new Date();
    const actualYear = date.getFullYear()
    return actualYear - birthYear
}

let userAccount: User & Account = {
    id: 0,
    name: "",
    cpf: 0,
    birth: "",
    age: 0,
    statement: [],
    balance: 0
}
userAccount = {
    ...userAccount,
    age: getAge(userAccount.birth)
}


app.post('/create-account', (req: Request, res: Response) => {
    try {
        const { name, birth }: User = req.body
        const cpf = Number(req.body.cpf)
        const newAccount = {...userAccount, name, cpf, birth}
        accounts.push(newAccount)
        res 
            .status(200)
            .send(accounts)
    } catch (err) {
        res
            .status(400)
            .send({message: err.message})
    }
})

app.get('/accounts', (req: Request, res: Response) => {
    try {
        let result = accounts.map(acc => acc)
        res
            .status(200)
            .send(result)
    } catch (err) {
        res
            .status(400)
            .send({ message: err.message })
    }
})

app.get('/accounts/balance', (req: Request, res: Response) => {
   try {
    const id = Number(req.query.id)
    const result = accounts.find((acc: any) => {
        if(acc.id === id) {
            return acc.balance
        }
    })

    res
        .status(200)
        .send(result)
   } catch (err) {
       res
       .status(400)
       .send({message: err.message})
        
   }
})

app.post('/addBalance', (req: Request, res: Response) => {
    let { name, cpf } = req.body
    let balance = Number(req.body.balance)
    let user = accounts.filter((acc: any) => acc.balance += balance)
    accounts.push(user)
    res
        .status(200)
        .send(user)
})


app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))



