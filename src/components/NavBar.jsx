import { NavLink, Link } from "react-router-dom"
import logo from '../media/logo.jpg'

export default function Navbar() {
    return (
        <header>
            <section>
                <img src={logo} />
                <h1>Demo site</h1>
            </section>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/items'>All Items</NavLink>
                <NavLink to='/form'>Add Items</NavLink>
            </nav>
        </header>
    )
}