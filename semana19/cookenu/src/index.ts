import app from "./app";
import connection from "./connection";
import { createUser } from "./endpoints/createUser";
import { getTokenData } from "./services/authenticator";



app.post('/signup', createUser)
