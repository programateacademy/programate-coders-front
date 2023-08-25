import React, { useState } from 'react';
import "../Styles/Formulario.css"

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !correo || !comentario) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    const data = {
      nombre,
      correo,
      comentario,
    };


    setNombre('');
    setCorreo('');
    setComentario('');
  };

  return (
    <div className="form-container">
      <p className='intro-text'>En Programate, valoramos enormemente tu opinión. Tu perspectiva es esencial para mejorar y ofrecerte la mejor experiencia posible. Si has tenido alguna idea, sugerencia o simplemente quieres compartir tus pensamientos con nosotros, te invitamos a que nos dejes tus comentarios.</p>
      <form  className='form' onSubmit={handleSubmit}>
        <label>
          <p className='type-imput'>Nombre: </p>
          <input type="text" value={nombre} placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          <p className='type-imput'>Correo: </p>
          <input type="email" value={correo}  placeholder='Correo electronico' onChange={(e) => setCorreo(e.target.value)} />
        </label>
        <br />
        <label>
          <p className='type-imput'>Comentario: </p>
          <textarea value={comentario}  placeholder='Comentarios' onChange={(e) => setComentario(e.target.value)} />
        </label>
        <br />
        <button className='btn-submit' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;

