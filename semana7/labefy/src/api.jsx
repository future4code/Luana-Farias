import axios from 'axios'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = { Authorization: 'luana-farias-cruz'}
const labefy = axios.create({baseURL, headers})
// axios.defaults.baseURL = baseUrl //deixa essa url como default do axios
// axios.defaults.headers.common["Authorization"] = 'luana-farias-cruz'

// export const pegarTodasPlaylists = async () => {
//     try {
//     const resultado = await axios.get()
//     if (resultado.status >= 200 && resultado.status <= 201) {
//         console.log("Data: ", resultado.data)
//         return resultado.data
//     } else {
//         console.warn("Deu ruim", resultado.status, resultado.statusText)
//     }
//     console.log(resultado)
//     } catch(e) {
//         console.log(e)
//     }
// }

//base retorna erro
const verifyStatus = r => {
    if (r.status >= 100 && r.status <= 201) {
        return r
    } else {
        console.warn("deu ruim", r.status, r.statusText)
    }
}

// base form requisição
const base = ({method = "get", url = "", params = "", data = ""}) => {  //aqui é uma destruturação dentro do próprio parâmetro?
return async () => {
    try {
        const r = await labefy.request({method, url, data})  //labefy contem as infos de header e url
        console.log(r.data.result.list.map(item => item.name))
        return verifyStatus(r)

    } catch(e) {
        console.log("naodeu")
        console.log(e)
    }
}
}

// requisições

export const pegarTodasPlaylists = base({})
export const criaPlaylists = name => base({method: 'post', data: {name}})()
export const pegarMusicasPlaylist = id => base({url: `${id}/tracks`}) //essa url não substitui a base url?
export const addMusicaPlaylist = (id,data) => base({method: "post", url:`${id}/tracks`, data})() //esse parenteses no final serve para passar um parâmetro para a segunda função que está dentro de base.
export const deletePlaylist = id => base({method: 'delete', url: id})
export const removerMusica = (id,track) => base({id: id, url: `${id}/tracks/${track}` })
