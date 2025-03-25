import express from 'express'
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'

const app = express()

//Procesar los datos de cliente:
app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

app.listen(PORT)
console.log(`Servidor ejecutandose en: http://localhost:${PORT} `);

//https://youtu.be/dJbd7BYofp4?t=2289