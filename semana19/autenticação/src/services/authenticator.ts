import * as jwt from "jsonwebtoken"

const expiresIn = "24h"

type typeAuthenticator = {
    id: string
}

const generateToken = (input: typeAuthenticator): string => {
    const token = jwt.sign(
        {
            id: input.id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    );
    return token
}