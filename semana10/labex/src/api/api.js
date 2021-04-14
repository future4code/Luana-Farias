import axios from 'axios'

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz"

// const headers = (token) => {
//     const headerInfo = {
//         auth: token
//     }
//     return headerInfo
// }


const base = ({method = 'get', url = '', params = '', data = {}}) => {
    return async () => {
        try {
            const res = await axios({
                method,
                url,
                data
            });
            return console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    }   
}

export const trips = base({url: `${baseURL}/trips`})

