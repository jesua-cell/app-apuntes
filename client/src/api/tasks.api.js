import axios from 'axios'; //Biblioteca: envias valores desde el front al Back

export const createTaskRequest = async (task) => {
    /**
     * Crea un metodo post; que envia los valores del form(client/TaskForm.jsx) al (server/index.js)
     * URL: http://localhost:3000/tasks; localhost, puerto y path
     */
    const response = await axios.post("http://localhost:3000/tasks", task); 
    return response.data //retornar el metodo
}