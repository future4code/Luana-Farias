import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config()

export const generateToken = (id: string) : string => {
    return jwt.sign(
        id,
        process.env.JWT_KEY!
    )
}

console.log(generateToken)

export const getTokenData = (token: string) => {
    const result = jwt.verify(
        token,
        process.env.JWT_KEY!
    )
    return result
}
