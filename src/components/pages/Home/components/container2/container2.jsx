import './styleContainer2.scss';
import { RiComputerLine } from "react-icons/ri";
import Button from '../../../../atoms/button/Button';

function Container2(){
    return(
        <div className='container2'>
            <h1>Recursos destacados</h1>
            <p>Personaliza tu viaje educativo <span> con nuestros programas diseñados para diferentes niveles de</span> experiencia y objetivos de aprendizaje.</p>
            <div className='cont-info-container2'>
                <div className='info1-container2'>
                    <div className='img1-container2'>
                        <RiComputerLine className='icon1-info1-container2'/>
                        <img src={new URL(`../../../../../assets/Imagenes/img-card1-cont1.svg`, import.meta.url).href}  alt="" className='img-info1-container2'/>
                    </div>
                    <div className='text-container2'>
                        <h2>HTML </h2>
                        <p>Descubre los secretos <span> del lenguaje del mercado más esencial</span></p>
                        <h3>Academy</h3>
                    </div>
                </div>
                <div className='info1-container2'>
                    <div className='img1-container2'>
                        <RiComputerLine className='icon1-info1-container2'/>
                        <img src={new URL(`../../../../../assets/Imagenes/Vectary texture.svg`, import.meta.url).href}  alt="" className='img-info1-container2'/>
                    </div>
                    <div className='text-container2'>
                        <h2>CSS </h2>
                        <p>Da vida a tus páginas <span> web con estilos únicos</span></p>
                        <h3>School</h3>
                    </div>
                </div>
                <div className='info1-container2'>
                    <div className='img1-container2'>
                        <RiComputerLine className='icon1-info1-container2'/>
                        <img src={new URL(`../../../../../assets/Imagenes/img-card1-cont1.svg`, import.meta.url).href} alt="" className='img-info1-container2'/>
                    </div>
                    <div className='text-container2'>
                        <h2>JavaScript</h2>
                        <p><span>Aprende a</span> crear interactividad y dinamismo<span> en tus proyectos</span></p>
                        <h3>Academy</h3>
                    </div>
                </div>
            </div>
            <a href="/programas"><Button className='button-primary button-container2'>¡Explora más Cursos!</Button></a>
        </div>
    )
}


export default Container2