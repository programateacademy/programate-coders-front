import React from "react";
import logo from "../../../assets/Imagenes/logo_azul.png";

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTiktok,
  BiLogoSpotify,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <img className="logo" src={logo} alt="" />

        <div className="number">3114508935</div>

        <div className="direction">Cra. 13#83-19 Bogotá, Colombia.</div>
      </div>
      <hr className="footer-divider" />
      <div className="footer2">
        <div className="social-media">
          <div className="facebook">
            <a
              className="redes"
              href="https://www.facebook.com/programateacademy"
              target="_blank"
            >
              <BiLogoFacebook />
            </a>
          </div>
          <div className="instagram">
            <a
              className="redes"
              href="https://www.instagram.com/somoseducamas/"
              target="_blank"
            >
              <BiLogoInstagram />
            </a>
          </div>
          <div className="linkedin">
            <a
              className="redes"
              href="https://www.linkedin.com/company/educam%C3%A1s/"
              target="_blank"
            >
              <BiLogoLinkedin />
            </a>
          </div>
          <div className="tiktok">
            <a
              className="redes"
              href="https://www.tiktok.com/@programateacademy"
              target="_blank"
            >
              <BiLogoTiktok />
            </a>
          </div>
          <div className="spotify">
            <a
              className="redes"
              href="https://open.spotify.com/show/4mYZpSGP4SJMEDvFilTNRp?si=5bNY3MFmTpS1Fq5GtiUpag.+&nd=1"
              target="_blank"
            >
              <BiLogoSpotify />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          Copyrigth&copy;2023 Desarrollado por Educamás
        </div>
      </div>
    </div>
  );
}

export default Footer;
