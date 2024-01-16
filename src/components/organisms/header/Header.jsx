import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import EducamasLogo from "../../../assets/Imagenes/logo1 1.svg";
import "./header.styles.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="header-container">
      <header className="header-content">
        <img src={EducamasLogo} alt="" className="logo-header" />
        <div className="nav-item-container">
          <li className="nav-item">
            <NavLink className="text-item" to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-item" to="/sobre-nosotros">
              Sobre nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-item" to="/programas">
              Programas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="text-item" to="/contacto">
              Contáctanos
            </NavLink>
          </li>
        </div>
        <FaBars className="menu-bars" onClick={toggleMenu} />
      </header>
      <nav className={`nav-list-container ${menuOpen && "nav-open"}`}>
        <ul className="nav-list-content">
          <li className="nav-list">
            <NavLink
              className="text-list"
              to="/"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Inicio
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className="text-list"
              to="/sobre-nosotros"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Sobre Nosotros
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className="text-list"
              to="/programas"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Programas
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className="text-list"
              to="/contacto"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Contáctanos
            </NavLink>
          </li>
          <ul className="nav-icons-container">
            <a
              href="https://www.facebook.com/programateacademy"
              className="nav-icons"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/somoseducamas/"
              className="nav-icons"
              target="_blank"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/educam%C3%A1s/"
              className="nav-icons"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.tiktok.com/@programateacademy"
              className="nav-icons"
              target="_blank"
            >
              <FaTiktok />
            </a>
            <a
              href="https://open.spotify.com/show/4mYZpSGP4SJMEDvFilTNRp?si=5bNY3MFmTpS1Fq5GtiUpag.+&nd=1"
              className="nav-icons"
              target="_blank"
            >
              <FaSpotify />
            </a>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
