import React, { useState, useRef } from 'react';
import '../Styles/Formulario.css'
import emailjs from '@emailjs/browser';

const Formulario = () => {
    const form = useRef();

    // Agrega un estado local para los campos del formulario
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mqa3iy4', 'template_kp8womf', form.current, '7FQZzz_Ssq8sMTNWf')
            .then((result) => {
                console.log(result.text);

                // Después de enviar con éxito, restablece los valores de los campos del formulario
                setFormData({
                    user_name: '',
                    user_email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    // Maneja los cambios en los campos del formulario y actualiza el estado local
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (

        <div className="contacto" id="contacto">
            <div className="contacto-title">
                <h2 className="titulo_formulario">¡En Programaté Academy, valoramos enormemente tu opinión!</h2>
                <p className='info-form'>Tu perspectiva es esencial para mejorar y ofrecerte la mejor experiencia posible.
                    Si has tenido alguna idea, sugerencia o simplemente quieres compartir tus pensamientos con nosotros, te invitamos a que nos dejes tus comentarios.</p>
            </div>
            <div className="contacto-content">
                <div className='image-container'>
                    <img className='imagen-form' src="./Imagenes/feedback-1889007_1280.jpg" alt="" />
                </div>
                <form className="contacto-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-inputs">
                        {/* Utiliza los valores del estado local para los campos */}
                        <input
                            type="text"
                            placeholder="Nombre Completo *"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            placeholder="Correo Electronico *"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="DEJANOS TU MENSAJE *"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    <input type="submit" value="Enviar" className='contacto-form_button' />
                </form>
            </div>
        </div>
    );
};

export default Formulario;

