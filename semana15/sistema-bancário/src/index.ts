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
   try {
    let { name } = req.body
    let balance = Number(req.body.balance)
    let cpf = Number(req.body.cpf)
    let user = accounts.filter((acc: any) => {
        if(acc.name === name && acc.cpf === cpf){
            return acc.balance += balance
        }
    })
    accounts.push(user)

    if(!user.length) {
        throw new Error("Not found.")
    }
    res
        .status(200)
        .send(user)
   } catch (err) {
    res
        .status(400)
        .send({message: err.message})
   }
})

app.post('/payment/:cpf', (req: Request, res: Response) => {
    try {
        const cpf = Number(req.params.cpf)
        let value = Number(req.body.value)
        const date = req.body.date
        const description = req.body.description

        const result: object[] = accounts.filter((acc: any) => {
            if(acc.cpf === cpf && acc.balance >= value) {
                acc.balance = acc.balance - value
                let newBill = {...req.body}
                acc.statement.push(newBill)
                return acc
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


app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))



