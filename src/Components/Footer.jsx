import React from 'react'
import '../Styles/Footer.css'


function Footer ()  {
    return (
        <div className="footer">
            <img className="logo" src="./imagenes/Programate.png" alt="" />

            <div className='social-media'>
                <p><img src="./imagenes/Instagram.png" alt="" /></p>
                <p><img src="./imagenes/Facebook.png" alt="" /></p>
                <p><img src="./imagenes/In.png" alt="" /></p>
                <p><img src="./imagenes/Spotify.png" alt="" /></p>
            </div>
        </div>
        
        
    )
}


export default Footer