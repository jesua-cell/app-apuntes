import { pool } from '../db.js'


export const getTasks = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC"); //Obtener todas los datos(tareas; objetos)
    res.json(result)
    console.log(result);
};

export const getTask = async (req, res) => {
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]); //Obtener un dato(tarea; objeto) en especifico indicado por los parametros de la URL('/:id') 
    console.log(req.params.id);
    if(result.length == 0) {return res.status(404).json({message: "Tarea no encontrada"})}
    res.send(result[0])
};

export const createTasks = async (req, res) => {
    const { title, description } = req.body //Obtener los datos del client
    const [result] = await pool.query("INSERT INTO tasks(title, description) VALUES (?, ?)", [title, description]) //Crear nuevos datos(tareas; objetos)
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

