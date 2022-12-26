// React Framework
import { NavLink } from 'react-router-dom'

// Assets
import logo from "../../assets/images/LOGO.svg";

// Style
import "../Header/Header.css"

function Header() {
    return (
        <header className='margin-LR margin-BT'>
            <nav>
                <img className='logo' src={logo} alt="logo de l'agence kasa" />
                <div className='menu'>
                    <NavLink className='menu-link space-link' to="/">Accueil</NavLink>
                    <NavLink className='menu-link' to="/about">A Propos</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header