// import axios from 'axios'

// const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana-cruz"

// axios.defaults.headers.common['Content-Type'] = 'application/json'

// // //INTERCEPTOR 
// // axios.interceptors.request.use(
// //     config => {
// //         console.log(
// //             `${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`
// //         );
// //     }
// // );


// // BASE para requisição
// const base = ({method = 'get', url = '', params = '', data = ""}) => {
//     return async () => {
//         try {
//             const res = await axios({
//                 method,
//                 url,
//                 data
//             });
//             return res.data
//         } catch (err) {
//             console.error(err.response);
//             console.error(login)
//         }
//     }   
// }

// export const trips = base({url: `${baseURL}/trips`})
// export const login = data => base({method: 'post', url: `${baseURL}/login`, data: `${data}`})()

