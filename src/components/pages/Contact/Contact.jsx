import React from "react";
import ContactForm from "../../organisms/ContactForm/ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">
          ¡En Prográmate Academy, valoramos enormemente tu opinión!
        </h2>
        <p className="contact-text">
          ¡Tu opinión es clave para mejorar! Si tienes ideas, sugerencias o
          simplemente quieres compartir tus pensamientos, ¡nos encantaría
          escucharte!
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
