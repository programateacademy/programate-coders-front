import { useState, useEffect } from 'react';
import { FaBars, FaFacebookF, FaLinkedinIn, FaSpotify, FaTiktok } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import './header.styles.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='cont-Head'>
            <header>
                <img src="./src/assets/Imagenes/logo1 1.svg" alt="" className="logo-header" />
                <FaBars className="menu-bars" onClick={toggleMenu} />
            </header>
            <nav className={`nav ${menuOpen && "nav-open"}`}>
                <ul className="nav-list">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Quiénes somos</a></li>
                    <li><a href="">Programas</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <ul className="nav-icons">
                    <a href="#" className="icons-nav"><FaFacebookF /></a>
                    <a href="#" className="icons-nav"><IoLogoInstagram /></a>
                    <a href="#" className="icons-nav"><FaLinkedinIn /></a>
                    <a href="#" className="icons-nav"><FaTiktok /></a>
                    <a href="#" className="icons-nav"><FaSpotify /></a>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
