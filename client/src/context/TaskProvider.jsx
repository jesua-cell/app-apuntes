import { useContext, useState } from "react";
import { getTaskRequest, deleteTaskRequest, createTaskRequest } from "../api/tasks.api" // Obtener, borrar y crear datos de la BD; 
import { TaskContext } from "./TaskContext";


export const useTask = () => {
    const context = useContext(TaskContext)
    if (!context) {
        throw new console.error("El useTask deberia de estar TaskContextProvider");
    };
    return context;
}

export const TaskContextProvidar = ({ children }) => { //Contenedor del useContext, que enlaza los componentes desde el hook padre(App.jsx)

    const [tasks, setTasks] = useState([])

    async function loadTask() {
        const response = await getTaskRequest();
        /**
         * metodo(setTasks): carga los datos
         * (response.data): solo obtiene los datos
         */
        setTasks(response.data);
        console.log(response.data);
    }

    const deleteTask = async (id) => { //Funcion para borrar la tarea; recibe un parametro: (id)
        try {
            const response = await deleteTaskRequest(id); //Obtiene el metodo(delete) desde axios
            setTasks(tasks.filter(task => task.id !== id)) // Muestra todo los objetos(datos), meno el que se acabo de borrar
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task); //Obtiene el metodo(post) desde axios
            console.log(response);
        } catch (error) {
            console.error(error);
        }
        /**
         * Funciones del Formulario: Mannejo de Errores y Manejo de Envio
         * (values)parametro predeterminado de Formik; accede a los datos del form
         * (isSubmitting)parametro predeterminado de Formik; es metodo que activa y  desactica la funcion (submit) del boton
         */
    }

    return (
        <TaskContext.Provider value={{ tasks, loadTask, deleteTask, deleteTask, createTask }}>
            {children}
        </TaskContext.Provider>
    )
}

//https://youtu.be/dJbd7BYofp4?t=7337