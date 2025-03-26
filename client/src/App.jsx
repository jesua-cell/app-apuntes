import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TasksPages } from './pages/TasksPages.jsx'
import { TaskForm } from './pages/TaskForm.jsx'
import { NotFound } from './pages/NotFound.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<TasksPages />} />
        <Route path='new' element={<TaskForm/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
