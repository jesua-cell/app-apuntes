import './App.css'
import { Route, Routes } from 'react-router-dom' //Libreria de Rutas

//Rutas:
import { TasksPages } from './pages/TasksPages.jsx'
import { TaskForm } from './pages/TaskForm.jsx'
import { NotFound } from './pages/NotFound.jsx'

//Barra de navegacion:

import { NavBar } from './components/NavBar.jsx'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<TasksPages />} />
        <Route path='new' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
