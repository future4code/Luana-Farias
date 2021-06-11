import app from "./app";
import connection from "./connection";
import { createUser } from "./endpoints/createUser";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";
import { getTokenData } from "./services/authenticator";



app.post('/signup', createUser)
app.post('/login', login)
app.get('/user/profile', getProfile)
