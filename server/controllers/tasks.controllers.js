import { json } from "express";

export const getTasks = (req, res) => {
    res.send('Obteniendo tareas')
};

export const getTask = (req, res) => {
    res.send('Obteniendo una tarea')
};

export const createTasks = (req, res) => {
    res.send('Creando tareas')
};

export const updateTasks = (req, res) => {
    res.send('Actualizando tareas')
};

export const deleteTasks = (req, res) => {
    res.send('Eliminando tarea')
};

