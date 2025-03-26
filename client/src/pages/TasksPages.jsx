import { useEffect, useState } from "react"
import { getTaskRequest } from "../api/tasks.api" // Obtener los datos de la BD
import { TaskCard } from "../components/TaskCard" //componente


export const TasksPages = () => {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        /**
         * Cargar y ejecutar la funcion loadTask()
         * almacenar en una variable el metodo getTaskRequest()
         */
        async function loadTask() {
            const response = await getTaskRequest();
            /**
             * metodo(setTasks): carga los datos
             * (response.data): solo obtiene los datos
             */
            setTasks(response.data);
            console.log(response.data);
        }
        loadTask() // Luego de que carge, se ejecuta:
    }, []) //[]: se ejecuta el componente despues de renderizarse

    function rendeMain() {

        if(tasks.length === 0) {return <h1>No hay tareas</h1>} // Condicion que verifica si hay contenido o no

        return tasks.map(task => (
            <TaskCard task={task} key={task.id} />
        ))
        /**
         * Mapeo de la variable 'tasks' 
         * Por cada elemento que haya en el 'tasks' se crea un componente
         * Prop: se le pasa un prop que tendra almacenado todos los datos  
         * key: identificador        
         */

        /**
         * * Renderizacion mudada al JSX
         * * Para poder menjar diferentes condiciones de los contenedores
         */
    }

    return (
        <>
            <div>
                <h1>Tareas:</h1>
                {rendeMain()}
            </div>
        </>
    )
}
