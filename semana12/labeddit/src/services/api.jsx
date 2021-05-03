import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeddit/'
})

// axios.defaults.headers.common['Content-Type'] = 'application/json'


