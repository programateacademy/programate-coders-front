import React, {useState} from "react";
import '../Styles/Header.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <img className="nav-logo" src="./imagenes/logo jpg.jpg" alt=""></img>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="#">Inicio</a>
                <a href="/Quienes-Somos">Quienes Somos</a>
                <a href="#">Recursos</a>
                <a href="/Cuentanos">Cuentanos</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`}onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
export default Navbar