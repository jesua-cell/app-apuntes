/**
 * Formik: Mantiene el estado
 * Form: Crea el formulario
 */
import { Form, Formik } from 'formik'

import { createTaskRequest } from '../api/tasks.api'; //Exportar el metodo de Axios

export const TaskForm = () => {
    return (
        <>
            <div>
                <Formik
                    initialValues={{ //Valor iniciales
                        title: "", //valor obtenido de: name="title"
                        description: "" //valor obtenido de: name="description"
                    }}
                    /**
                     * Metodo: Enviar datos desde el Formulario
                     * Desde el parametro (values): accede a los valores del Form. Y con el metodo(objeto): response; envia los datos a la BD
                     * Desde el segundo parametro (actions): se utiliza un metodo para limpiar los valores del Form 
                     */
                    onSubmit={async (values, actions) => {
                        console.log(values);
                        try {
                            const response = await createTaskRequest(values);
                            console.log(response);
                            actions.resetForm()
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                >
                    {/*
                    * Funciones del Formulario: Mannejo de Errores y Manejo de Envio
                    * (values)parametro predeterminado de Formik; accede a los datos del form
                    * (isSubmitting)parametro predeterminado de Formik; es metodo que activa y desactica la funcion (submit) del boton 
                    */}
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        // metodo 'values'
                        <Form onSubmit={handleSubmit}>
                            <label>Titulo</label>
                            <input
                                type="text"
                                name='title'
                                placeholder='Escriba un Titulo'
                                onChange={handleChange}
                                value={values.title} />

                            <label>Descripcion</label>
                            <textarea
                                name="description"
                                rows="3"
                                placeholder='Escriba una descripcion'
                                onChange={handleChange}
                                value={values.description}
                            ></textarea>

                            <button type='submit' disabled={isSubmitting}>
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
