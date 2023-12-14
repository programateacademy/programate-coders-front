import React from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [cohort, setCohort] = React.useState("");
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name && email && cohort && message) {
      emailjs
        .sendForm(
          "service_rx5rmnp",
          "template_z6rbjf3",
          form.current,
          "orkbs0ghwa9EbWcDc"
        )
        .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          setCohort("");
        });
    } else {
      alert("Diligencia todos los campos antes de enviar");
    }
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="cohort">
            <select
              type="select"
              name="cohort"
              value={cohort}
              onChange={(e) => setCohort(e.target.value)}
            >
              {/* Cohortes = Pioner@s - Cuackcoders - Cundicoders - Freedom Dev - Dragon Coders  - WizardsHub -Devs36 - The Code Wizards - Futuristas - Prográmat-E - Pixel Wave */}
              <option value="Cohorte">¿A qué cohorte perteneces?*</option>
              <option value="Pioner@s">Cohorte "Pioner@s"</option>
              <option value="Cuackcoders">Cohorte "Cuackcoders"</option>
              <option value="Cundicoders">Cohorte "Cundicoders"</option>
              <option value="Freedom Dev">Cohorte "Freedom Dev"</option>
              <option value="Dragon Coders">Cohorte "Dragon Coders"</option>
              <option value="WizardsHub">Cohorte "WizardsHub"</option>
              <option value="Devs36">Cohorte "Devs36"</option>
              <option value="The Code Wizards">
                Cohorte "The Code Wizards"
              </option>
              <option value="Futuristas">Cohorte "Futuristas"</option>
              <option value="Prográmat-E">Cohorte "Prográmat-E"</option>
              <option value="Pixel Wave">Cohorte "Pixel Wave"</option>
              <option value="(Ninguna)">Ninguna de las anteriores</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <textarea
              type="text"
              name="message"
              placeholder="Déjanos tu mensaje*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
            />
          </label>
          <p>Carácteres restantes: {500 - message.length}</p>
        </div>
        <button className="form-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
