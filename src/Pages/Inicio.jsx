import React from 'react'
import Header from "../Components/Header"
import '../Styles/Inicio.css'

function Inicio() {
    return (
        <div className='Container-programate'>
            <Header />
            <h1>Bienvenido a Programate</h1>
            <div className='Container-description'>
                <p>Prográmate es un bootcamp de desarrollo web. <br />
                    Tiene como objetivo responder a las necesidades de formación de personas talentosas <br /> a las que les apasiona el mundo de la tecnología, y las demandas de las empresas <br /> que se encuentran en proceso de transformación y consolidación digital en el país.</p>
                <button>INGRESAR</button>
            </div>

            <div className='Container-video'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8oY2riIbxg4?si=1bzUky5r9v5r8s3p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Inicio
