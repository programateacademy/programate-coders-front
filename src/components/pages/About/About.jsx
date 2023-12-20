import React from 'react';
import NumeroAnimado from './componentes/numeroAnimado';


function About() {
  return (

    <div className="container-about">
      <div className="container1">
        <div className="title">¿Quiénes Somos?
        </div>
        <br/>
        <p className="about-text">Somos una escuela de programación inclusiva y solidaria. Formamos el talento
          que hará posible la transformación digital de nuestro país, <span className="subrayado">nuestro principal 
          objetivo es que logres desarrollar tu potencial para el sector tech y lleves 
          tu talento al siguiente nivel.</span>
        </p>
      </div>
      
      <div className="container2">
          <div className="info-educamas">
            <div className="info-graduados">
              <div className="contador-graduados"><NumeroAnimado numero={130} />+</div>
              
              <h4 className="title-graduados">Graduados</h4>
              
              <div className="text-graduados">¿Quieres ser uno de ellos?  Conoce nuestros programas
              y cambia tu vida a través de la programación.
              </div>
            </div>
            
            <div className='info-empleabilidad'>
                <div class="porcentaje-empleados"><NumeroAnimado numero={88} />%</div>
                
                <h4 className='title-empleabilidad'>Empleabilidad</h4>
              
                <div className="text-empleabilidad">De nuestros estudiantes consiguen un empleo al finalizar su formación</div>
                
            </div>
            <div className='empresas-aliadas'>
                <div class="contador-empresas"><NumeroAnimado numero={30} />+</div>
                
                <h4 className='title-empresas-aliadas'>Empresas aliadas</h4>
                
                <div className="text-empresas-aliadas">Generamos alianzas con empresas para que puedas tener tu primera oportunidad en el mundo tech</div>
                
            </div>
          </div>
      </div>
      

    </div>
  


  )

  
}

export default About;
