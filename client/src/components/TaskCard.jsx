import { useTask } from "../context/TaskProvider"; //useContext

/**
 * Destructura el prop: task
 */
export const TaskCard = ({ task }) => {

    const { deleteTask } = useTask()

    return (
        <>
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <span>{task.done == 1 ? "👌" : "🤬"}</span>
                <span>{task.createAt}</span>
                <button onClick={() => deleteTask(task.id)}>Borrar</button>
                {/* Evento para borrar tareas: indicadas por su ID */}
                <button>Editar</button>
            </div>
        </>
    )
}
