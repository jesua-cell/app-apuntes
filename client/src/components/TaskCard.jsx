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
            <div className="task-card">
                <header className="flex justify-between">
                    <h2>{task.title}</h2>
                    <span>{task.done == 1 ? "✅" : "❌"}</span>
                </header>
                <p>{task.description}</p>
                <h3>{task.createAt}</h3>
                <div className="task-botones">
                    <button className="btn-borrar" onClick={() => deleteTask(task.id)}>Borrar</button>
                    {/* Evento para borrar tareas: indicadas por su ID */}
                    <button className="btn-editar" onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
                    <button className="btn-done" onClick={() => handleDone(task.done)}>Terminada</button>
                </div>
            </div>
        </>
    )
}
