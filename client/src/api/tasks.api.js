import axios from 'axios'; //Biblioteca: envias valores desde el front al Back

export const getTaskRequest = async () => {
    /**
     * crea un metodo GET, que obtiene todos los datos de la BD
     * URL:http://localhost:3000/tasks; localhost, puerto y path(tasks)
     */
    const response = await axios.get("http://localhost:3000/tasks");
    return response
}

export const createTaskRequest = async (task) => {
    /**
     * Crea un metodo post; que envia los valores del form(client/TaskForm.jsx) al (server/index.js)
     * URL: http://localhost:3000/tasks; localhost, puerto y path
     */
    const response = await axios.post("http://localhost:3000/tasks", task); 
    return response.data //retornar el metodo
}

export const deleteTaskRequest = async (id) => {
    const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
    return response
}
