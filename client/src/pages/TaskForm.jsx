/**
 * Formik: Mantiene el estado
 * Form: Crea el formulario
 */
import { Form, Formik } from 'formik'

export const TaskForm = () => {
    return (
        <>
            <div>
                <Formik
                    initialValues={{ //Valor iniciales
                        title: "", //valor obtenudo de: name="title"
                        description: "" //valor obtenudo de: name="description"
                    }}
                    onSubmit={(values) => { //Metodo: Enviar datos desde el Formulario
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleSubmit }) => ( //Funciones del Formulario: Mannejo de Errores y Manejo de Envio
                        <Form onSubmit={handleSubmit}>
                            <label>Titulo</label>
                            <input
                                type="text"
                                name='title'
                                placeholder='Escriba un Titulo'
                                onChange={handleChange} />

                            <label>Descripcion</label>
                            <textarea
                                name="description"
                                rows="3"
                                placeholder='Escriba una descripcion'
                                onChange={handleChange}
                            ></textarea>

                            <button type='submit'>Guardar</button> 
                            {/* el type='submit'activa el onSubmit */}
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
