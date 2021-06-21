import app from "./app";
import connection from "./connection";
import { createUser } from "./endpoints/createUser";
import { getProfile } from "./endpoints/getProfile";
import { getUserById } from "./endpoints/getUserById";
import { login } from "./endpoints/login";
import { getTokenData } from "./services/authenticator";



app.post('/signup', createUser)
app.post('/login', login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getUserById)
