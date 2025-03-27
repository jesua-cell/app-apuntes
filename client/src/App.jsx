import './App.css'
import { Route, Routes } from 'react-router-dom' //Libreria de Rutas

//Rutas:
import { TasksPages } from './pages/TasksPages.jsx'
import { TaskForm } from './pages/TaskForm.jsx'
import { NotFound } from './pages/NotFound.jsx'

//Barra de navegacion:

import { NavBar } from './components/NavBar.jsx'

//useContext:
import { TaskContextProvidar } from './context/TaskProvider.jsx'
/**
 * useContext permite enlazar funcionalidades de diferentes hooks
 * Para que puedo funcionar el useContect tiene que iniciarse en hook Padre(app.js)
 * Luego insertar todos los demos hooks dentro de su componente
 */

function App() {

  return (
    <>
      <TaskContextProvidar>
        <NavBar />
        <Routes>
          <Route path='/' element={<TasksPages />} />
          <Route path='new' element={<TaskForm />} />
          <Route path='edit/:id' element={<TaskForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </TaskContextProvidar>
    </>
  )
}

export default App
