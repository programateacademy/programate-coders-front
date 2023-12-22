import './styleContainer3.scss';


function Container3() {
    return (
        <div className='container3'>
                <h1 className='title-info-cont3'>Conocer algunas historias</h1>
            <div className='info-cont3'>
                <div className='history' >
                    <h2>Sebastian</h2>
                    <p>El bootcamp de desarrollo frontend no solo me equipó con habilidades técnicas, sino que también fue una oportunidad para desarrollar mis habilidades blandas.</p>
                    <img src={new URL(`../../../../../assets/Imagenes/commits.svg`, import.meta.url).href}  alt="" />
                </div>
                <div className='history' id='history2'>
                    <h2>Andres</h2>
                    <p>Aprendí habilidades clave para el desarrollo web y ahora me siento confiado para enfrentar nuevos proyectos. ¡Gracias por brindarme las herramientas para impulsar mi carrera en el mundo del desarrollo Frontend!"</p>
                    <img src={new URL(`../../../../../assets/Imagenes/commits.svg`, import.meta.url).href} alt="" />
                </div>
            </div>
        </div>
    )
}


export default Container3