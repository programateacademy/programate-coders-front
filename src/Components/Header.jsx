/*import React, {useState} from "react";
import '../Styles/Header.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <img className="nav-logo" src="./Imagenes/logo jpg.jpg" alt=""></img>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/Inicio">Inicio</a>
                <a href="/Quienes-Somos">Quienes Somos</a>
                <a href="/Recursos">Recursos</a>
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
export default Navbar*/


import React, { useState } from "react";
import '../Styles/Header.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(""); // Estado para rastrear el ítem seleccionado

    // Función para manejar el clic en un ítem del menú
    const handleItemClick = (item) => {
        setSelectedItem(item);
        // Cierra el menú al seleccionar un ítem (puedes cambiar este comportamiento según tus necesidades)
        setIsOpen(false);
    }

    return (
        <div className="navbar">
            <img className="nav-logo" src="./imagenes/logo jpg.jpg" alt="" />

            <div className={`nav-items ${isOpen && "open"}`}>
                <a
                    href="/Inicio"
                    className={selectedItem === "Inicio" ? "selected" : ""}
                    onClick={() => handleItemClick("Inicio")}
                >
                    Inicio
                </a>
                <a
                    href="/Quienes-Somos"
                    className={selectedItem === "Quienes-Somos" ? "selected" : ""}
                    onClick={() => handleItemClick("Quienes-Somos")}
                >
                    Quienes Somos
                </a>
                <a
                    href="/Recursos"
                    className={selectedItem === "Recursos" ? "selected" : ""}
                    onClick={() => handleItemClick("Recursos")}
                >
                    Recursos
                </a>
                <a
                    href="/Cuentanos"
                    className={selectedItem === "Cuentanos" ? "selected" : ""}
                    onClick={() => handleItemClick("Cuentanos")}
                >
                    Cuentanos
                </a>
            </div>

            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Navbar;
