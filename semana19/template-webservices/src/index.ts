import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import { getAdressInfo } from "./endpoints/getAdressInfo";


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)

getAdressInfo("05424150").then(console.log)