import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        multipleStatements: true
    }
})


// host: 35.226.146.116
// user: 2114698-luana-farias
// password: XSg@XOcjjWR@onzg44AF
// database: cruz-2114698-luana-farias