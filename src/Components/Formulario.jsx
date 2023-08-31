import React, { useState } from 'react';
import '../Styles/Formulario.css'

const Formulario = () => {
  return (
    <div className="contacto" id="contacto">
        <div className="contacto-title">
            <h2><p><i>¡En Programaté Academy, valoramos enormemente tu opinión!</i></p></h2>
            <p><i>Tu perspectiva es esencial para mejorar y ofrecerte la mejor experiencia posible. 
              Si has tenido alguna idea, sugerencia o simplemente quieres compartir tus pensamientos con nosotros, te invitamos a que nos dejes tus comentarios.</i></p>
        </div>
        <div className="contacto-content">
            <form className="contacto-form">
                <div className="form-inputs">
                    <input type="text" placeholder="Nombre Completo *"/>
                    <input type="text" placeholder="Correo Electronico *"/>
                    <input type="text" placeholder="Celular *"/>
                </div>
                <textarea name="mensaje" id="" cols="30" rows="10" placeholder="DEJANOS TU MENSAJE *"></textarea>
            </form>
            <div className="contacto-form_button">
                <a href="#"><b>ENVIAR</b></a>
            </div>
        </div>
    </div>
);
};

export default Formulario;
