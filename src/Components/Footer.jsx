import React from 'react'
import '../Styles/Footer.css'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTiktok, BiLogoSpotify } from "react-icons/bi"




function Footer() {
    return (
        <div className="footer">
            <img className="logo" src="./imagenes/Programate.png" alt="" />

            <div className='social-media'>
                <a className='redes' href="https://web.facebook.com/somoseducamas/?_rdc=1&_rdr">
                    <BiLogoFacebook />
                </a>
                <a className='redes' href="https://www.instagram.com/somoseducamas/">
                    <BiLogoInstagram />
                </a>
                <a className='redes' href="https://www.linkedin.com/company/educam%C3%A1s/">
                    <BiLogoLinkedin />
                </a>
                <a className='redes' href="">
                    <BiLogoTiktok />
                </a>
                <a className='redes' href="https://open.spotify.com/show/4mYZpSGP4SJMEDvFilTNRp?si=5bNY3MFmTpS1Fq5GtiUpag.+&nd=1">
                    <BiLogoSpotify />
                </a>

            </div>
        </div>


    )
}


export default Footer