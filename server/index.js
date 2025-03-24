import express from 'express'
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(indexRoutes)

app.listen(PORT)
console.log(`Servidor ejecutandose en: http://localhost:${PORT} `);

//https://youtu.be/dJbd7BYofp4?t=1145