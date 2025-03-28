import express from 'express'
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path';
import { json } from 'stream/consumers';

const app = express()

//Manejo del puerto del Front al Back:
app.use(cors({ origin: 'http://localhost:5173' }))

//rutas de las carpetas del proyecto:
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

//Procesar los datos de cliente:
app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

//Archivos estaticos:
app.use(express.static(join(__dirname, '../client/dist')));

app.listen(PORT)
console.log(`Servidor ejecutandose en: http://localhost:${PORT} `);
