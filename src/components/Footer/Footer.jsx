// Assets
import logo from "../../assets/images/LOGO_BLANC.svg";

// Style
import "../Footer/Footer.css"

function Footer() {
    return (
        <footer className='footer-background'>
            <div className="footer-container">
                <img className="footer-logo" src={logo} alt="logo de l'agence kasa" />
                <p className="footer-text">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer