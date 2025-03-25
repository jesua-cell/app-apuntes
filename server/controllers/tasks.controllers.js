import { pool } from '../db.js'


export const getTasks = (req, res) => {
    res.send('Obteniendo tareas')
};

export const getTask = (req, res) => {
    res.send('Obteniendo una tarea')
};

export const createTasks = async (req, res) => {
    const { title, description } = req.body //Obtener los datos del client
    const [result] = await pool.query("INSERT INTO tasks(title, description) VALUES (?, ?)", [title, description])
    console.log(result);
    res.send({
        id: result.insertId,
        title,
        description
    })
};

export const updateTasks = (req, res) => {
    res.send('Actualizando tareas')
};

export const deleteTasks = (req, res) => {
    res.send('Eliminando tarea')
};

