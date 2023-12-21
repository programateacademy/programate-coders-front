import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
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
          <a href="https://www.facebook.com/somoseducamas/" className="icons-nav">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/programate_academy/" className="icons-nav">
            <IoLogoInstagram />
          </a>
          <a href="https://www.linkedin.com/company/educam%C3%A1s/?originalSubdomain=co" className="icons-nav">
            <FaLinkedinIn />
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
