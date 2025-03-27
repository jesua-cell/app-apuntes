import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <Link to="/">
                    <h1>Tareas</h1>
                </Link>
                <ul className='listaNav'>
                    <li className='li-nav'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='li-nav'>
                        <Link to="/new">Crear Tarea</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
