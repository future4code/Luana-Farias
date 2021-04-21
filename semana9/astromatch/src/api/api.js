import axios from 'axios'

const baseURL ='https://us-central1-missao-newton.cloudfunctions.net/astroMatch/'
const headers = { "Content-Type": "application/json" }
const astroMatch = axios.create({baseURL, headers})

//tratamento de erros
const verifyStatus = r => {
    if (r.status >= 100 && r.status <= 200) {
        return r
    } else {
        console.warn("Ops, algo deu errado!")
    }
}

// base para requisição
const base = ({method = "get", url = "", params = "", data = {}}) => {
    return async () => {
        try {
            const r = await astroMatch.request({method, url, data})
            // return console.log(r.data)
            return r.data
        } catch(e) {
            console.log(e)
        }
    } 
}


export const getUsers = base({url: `luana/person`})
export const getMatches = base({url: `luana/matches`})
export const choosePerson = (data) => base({method: "post", url: `luana/choose-person`, data})()
export const clear = base({method: "put", url: `luana/clear`})

