import { deleteTaskRequest } from "../api/tasks.api";

/**
 * Destructura el prop: task
 */
export const TaskCard = ({ task }) => {

    const handleDelete = async (id) => { //Funcion para borrar la tarea; recibe un parametro: (id)
        try {
            const response = await deleteTaskRequest(id); //Obtiene el metodo desde axios
            console.log(response);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <span>{task.done == 1 ? "👌" : "🤬"}</span>
                <span>{task.createAt}</span>
                <button onClick={() => handleDelete(task.id)}>Borrar</button>
                {/* Evento para borrar tareas: indicadas por su ID */}
                <button>Editar</button>
            </div>
        </>
    )
}
