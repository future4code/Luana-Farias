import express, { Request, Response } from 'express'
import cors from 'cors'
import { countries } from './countries';

const app = express();
app.use(express.json())
app.use(cors())

// const result = countries.map(country => ({
//     id: country.id,
//     name: country.name
//   }))


app.get('/countries/all', (req: Request, res: Response) => {

    const result = countries.map(country => {
        return ({
            id: country.id,
            name: country.name
        })
      })

    try {
        res.status(200)
        res.send(result)
    } catch(error) {
        res
        .status(400)
        .send({message: error.message})
    }
})

app.get('/countries/search', (req: Request, res: Response) => {
    try {
        const name = req.query.name as string
        const capital = req.query.capital as string
        const continent = req.query.continent as string
    
        let result = countries

        const isResultFound = (param: string) => {
            if(result.length < 1) {
                throw new Error(`${param} not found.`)
            }
        }

        if(req.query.name) {
            result = result.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()))
            isResultFound(name)
        } 

        if(req.query.capital) {
            result = result.filter((country) => country.capital.toLowerCase().includes(capital.toLowerCase()))
            isResultFound(capital)
        } 

        if(req.query.continent) {
            result = result.filter((country) => country.continent.toLowerCase().includes(continent.toLowerCase()))
            isResultFound(continent)
        } 


        res
            .status(200)
            .send(result)

    } catch(error) {
        res
            .status(404)
            .send({message: error.message})
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result = countries.find((country => country.id === id))
        console.log(result)
        
    if(!result) {
        throw new Error("O id específico não pôde ser encontrado.")
    }

        res
        .status(200)
        .send(result)

    } catch(error) {
        res
        .status(400)
        .send({message: error.message})
    }
})

    app.put('/countries/edit/:id', (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id)
            const { name, capital } = req.body

            const filteredResult = countries.filter((country) => {
                return country.id === id
            })

            const result = filteredResult.forEach((item) => {
                return (
                    item.name = name
                )
            })
            
            // const result = filteredResult.forEach((country) => {
            //     return (
            //         country['name'] = name,
            //         country['capital'] = capital
            //     )
            // })

            // const result = countries.forEach((country) => {
            //     return (
            //         country['name'] = name,
            //         country['capital'] = capital
            //     )
            // })
            
            res
                .status(200)
                .send(result)
                console.log(result)
        } catch {

        }
    })





app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))