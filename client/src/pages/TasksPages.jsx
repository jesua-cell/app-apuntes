import { useEffect } from "react"
import { TaskCard } from "../components/TaskCard" //componente

import { useTask } from "../context/TaskProvider" //useContext

export const TasksPages = () => {

    const { tasks, loadTask } = useTask() //Estado personalizado del useContext

    useEffect(() => {
        loadTask() // Luego de que carge, se ejecuta:
    }, []) //[]: se ejecuta el componente despues de renderizarse

    function rendeMain() {

        if (tasks.length === 0) { return <h1>No hay tareas</h1> } // Condicion que verifica si hay contenido o no

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
