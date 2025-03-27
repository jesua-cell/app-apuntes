import { useTask } from "../context/TaskProvider"; //useContext
import { useNavigate } from "react-router-dom"

/**
 * Destructura el prop: task
 */
export const TaskCard = ({ task }) => {

    const { deleteTask, ToggleTaskDone } = useTask()

    const navigate = useNavigate()

    const handleDone = async () => {
        await ToggleTaskDone(task.id)
    }

    return (
        <>
            <div>
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <span>{task.done == 1 ? "👌" : "🤬"}</span>
                <span>{task.createAt}</span>
                <button onClick={() => deleteTask(task.id)}>Borrar</button>
                {/* Evento para borrar tareas: indicadas por su ID */}
                <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
                <button onClick={() => handleDone(task.done)}>Done</button>
            </div>
        </>
    )
}
