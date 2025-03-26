import express from 'express'
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cors from 'cors'

const app = express()

//Manejo del puerto del Front al Back:
app.use(cors({origin: 'http://localhost:5173'}))

//Procesar los datos de cliente:
app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

app.listen(PORT)
console.log(`Servidor ejecutandose en: http://localhost:${PORT} `);
