// React Framework
import { NavLink } from 'react-router-dom';

// Images
import logo from '../../assets/images/LOGO.svg';

// Style
import '../Header/Header.css';

function Header() {
    let activeStyle = {textDecoration: "underline"};
    return (
        <header className='margin-LR margin-BT'>
            <nav>
                <img className='logo' src={logo} alt="logo de l'agence kasa" />
                <div className='menu'>
                    <NavLink 
                        className='menu-link space-link'
                        style={({ isActive }) =>isActive ? activeStyle : undefined}
                        to="/">Accueil
                    </NavLink>
                    <NavLink 
                        className='menu-link'
                        style={({ isActive }) =>isActive ? activeStyle : undefined}
                        to="/about">A Propos
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header