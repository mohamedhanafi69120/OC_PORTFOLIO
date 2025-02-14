import MoiImage from "../../styles/img/moi.webp";
import "./contactForm.scss";
import "font-awesome/css/font-awesome.min.css";

function ContactForm() {
  return (
    <section id="contact" className="contenairContactForm">
      <h2>CONTACT</h2>
      <div className="monText">
        {/* Ajout de loading="lazy" pour optimiser le chargement de l'image */}
        <img
          src={MoiImage}
          alt="image de Mohamed Hanafi développeur web"
          loading="lazy"
        />
        <span>Vous avez un projet ? Discutons-en !</span>

        {/* Ajout d'un aria-label pour l'accessibilité */}
        <i className="fa fa-phone" aria-hidden="true">
          <span>&ensp;+33 7 83 34 81 96</span>
        </i>
      </div>
      <div id="contactMoov">
        {/* Ajout de rel="noopener noreferrer" pour la sécurité */}
        <a
          href="mailto:mohamedhanafi69100@gmail.com"
          className="ButtonEnvoyer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Envoyer un e-mail</button>
        </a>
      </div>
    </section>
  );
}

export default ContactForm;
