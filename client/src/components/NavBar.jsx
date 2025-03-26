import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <h1>NavBar</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/new">Crear Tarea</Link>
                </li>
            </ul>
        </>
    )
}
