export const PORT = process.env.PORT || 3000

//MySql:
const DB_HOST = process.env.MYSQLHOST || "localhost"
const DB_PORT = process.env.MYSQLPORT || 3306
const DB_NAME = process.env.MYSQLDATABASE || "login"
const DB_USER = process.env.MYSQLUSER || "root"
const DB_PASSWORD = process.env.MYSQLPASSWORD || ""

export default {
    PORT,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
}