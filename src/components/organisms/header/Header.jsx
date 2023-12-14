import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "./header.styles.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="cont-Head">
      <header>
        <img
          src="./src/assets/Imagenes/logo1 1.svg"
          alt=""
          className="logo-header"
        />
        <FaBars className="menu-bars" onClick={toggleMenu} />
      </header>
      <nav className={`nav ${menuOpen && "nav-open"}`}>
        <ul className="nav-list">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(!menuOpen)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre-nosotros"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Sobre Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/programas" onClick={() => setMenuOpen(!menuOpen)}>
              Programas
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" onClick={() => setMenuOpen(!menuOpen)}>
              Contáctanos
            </NavLink>
          </li>
        </ul>
        <ul className="nav-icons">
          <a href="#" className="icons-nav">
            <FaFacebookF />
          </a>
          <a href="#" className="icons-nav">
            <IoLogoInstagram />
          </a>
          <a href="#" className="icons-nav">
            <FaLinkedinIn />
          </a>
          <a href="#" className="icons-nav">
            <FaTiktok />
          </a>
          <a href="#" className="icons-nav">
            <FaSpotify />
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
