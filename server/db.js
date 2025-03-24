import { createPool } from 'mysql2/promise'
import {DB_HOST, DB_USER, DB_NAME, DB_PASSWORD} from './config.js'

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD
})