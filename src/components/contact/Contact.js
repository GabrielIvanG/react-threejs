import './Contact.css';
import React from 'react';
import emailjs from 'emailjs-com';
import { SiWhatsapp } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID_GMAIL,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const handleClickMedia = (e) => {
    if (e.target.id === 'face') {
      window.open('https://www.facebook.com/BelliadsPublicidad');
    }
    if (e.target.id === 'insta') {
      window.open('https://www.instagram.com/belliads/');
    }
    if (e.target.id === 'gith') {
      window.open('https://github.com/GabrielIvanG');
    }
    if (e.target.id === 'linke') {
      window.open('https://www.linkedin.com/in/ivangabrielgonzalez/');
    }
  };

  return (
    <>
      <div className="compContainer">
        <div className="contactInfo">
          <h2 className="contactInfoTitle">INFORMACIÓN DE CONTACTO</h2>
          <h3 className="contactInfoSubtitle">
            Rellená el formulario para enviar un mail, contestaré a la brevedad!
          </h3>
          <div className="contactInfoContent">
            <div className="contactWhatsapp">
              <SiWhatsapp className="contactIcons" />
              <span>+54 341-712 4859</span>
            </div>
            <div className="contactEmail">
              <FiMail className="contactIcons" />
              <span>belliadagencia@gmail.com</span>
            </div>
            <div className="contactLocation">
              <IoLocationOutline className="contactIcons" />
              <span>ARGENTINA</span>
            </div>
          </div>
          <div className="contactSocialMedia">
            <div className="iconS" onClick={handleClickMedia}>
              <FaFacebook id="face" />
            </div>
            <div className="iconS" onClick={handleClickMedia}>
              <FaInstagram id="insta" />
            </div>
            <div className="iconS" onClick={handleClickMedia}>
              <FaLinkedin id="linke" />
            </div>
            <div className="iconS" onClick={handleClickMedia}>
              <FaGithub id="gith" />
            </div>
          </div>
        </div>
        <form className="contact-form-container" onSubmit={sendEmail}>
          <div className="contact-form">
            <div className="subject">
              <label>Asunto</label>
              <input type="text" name="subject" />
            </div>
            <div className="phone">
              <label>Número de teléfono</label>
              <input type="number" name="contact_number" />
            </div>
            <div className="name">
              <label>Nombre Completo / Empresa</label>
              <input type="text" name="user_name" />
            </div>
            <div className="emailClass">
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div className="messag">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <input type="submit" value="ENVIAR" id="emailBtn" />
        </form>
      </div>
    </>
  );
}
