/**
 * Formik: Mantiene el estado
 * Form: Crea el formulario
 */
import { Form, Formik } from 'formik'

//uso de useContext
import { useTask } from '../context/TaskProvider';

import { useParams, useNavigate } from 'react-router-dom'// Accede a las partes dinamicas de la URL
import { useEffect, useState } from "react"

export const TaskForm = () => {

    const { createTask, getTask, updateTask } = useTask(); // Acceder a los metodos del TaskProvider

    const [tasks, setTasks] = useState({
        title: "",
        description: ""
    });

    const params = useParams()
    const navigate = useNavigate()

    /**
     * El useEffect(): carga y ejecuta la funcion loadTask; la cual tiene adentro el metodo getTask()
     * Luego, actualiza el estado local con los nuevos datos
     * retorna: loadTask()
     * []: se carga cuando se ejecuta todo el componente
     */
    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id)
                console.log(`Actual URL: ${JSON.stringify(params)}`);
                console.log(task);
                setTasks({
                    title: task.title,
                    description: task.description
                });
            }
        };
        loadTask()
    }, [])


    return (
        <>
            <div>
                <Formik
                    initialValues={tasks} //Valores iniciales
                    enableReinitialize={true} //Reiniciar valores

                    /**
                     * Metodo: Enviar datos desde el Formulario
                     * Desde el parametro (values): accede a los valores del Form. Y con el metodo(objeto): response; envia los datos a la BD
                     * Desde el segundo parametro (actions): se utiliza un metodo para limpiar los valores del Form 
                     */

                    /** 
                     * Condicional:
                     * Si en el metodo onSubmit(), tiene un ID, actualiza; y redirecciona
                     * Si no tiene un ID, crea
                     */
                    onSubmit={async (values, actions) => {
                        console.log(values);
                        if (params.id) {
                            await updateTask(params.id, values)
                        } else {
                            await createTask(values);
                        };
                        navigate("/")
                        /**
                         * Limpiar el formulario despues de actualizar:
                         */
                        setTasks({
                            title: "",
                            description: ""
                        });
                    }}
                >

                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        // metodo 'values'
                        <Form onSubmit={handleSubmit} className='taskFormulario'>
                            <h1 className='tituloForm'>
                                {
                                    params.id ? "Editar Tarea" : "Crear Tarea"
                                }
                            </h1>
                            <label className='labelFrom'>Titulo</label>
                            <input
                                type="text"
                                name='title'
                                placeholder='Escriba un Titulo'
                                onChange={handleChange}
                                value={values.title} />

                            <label className='labelFrom'>Descripcion</label>
                            <textarea
                                className='textAreaForm'
                                name="description"
                                rows="3"
                                placeholder='Escriba una descripcion'
                                onChange={handleChange}
                                value={values.description}
                            ></textarea>

                            <button
                                className='botonForm'
                                type='submit'
                                disabled={isSubmitting}>
                                {isSubmitting ? "Enviando" : "Enviar"}
                            </button>
                            {/* el type='submit'activa el onSubmit */}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
