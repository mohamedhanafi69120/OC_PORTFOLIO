import React from "react";
import MoiImage from "../../sass/img/moi.webp";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <h1>PORTFOLIO DE MOHAMED</h1>
      <div className="image-container">
        <img
          src={MoiImage}
          alt="image de Mohamed Hanafi développeur web"
          className="profile-picture"
          loading="lazy"
        />
      </div>
      <div className="presentation">
        <h2>Intégrateur Web</h2>
        <p>
          Bonjour, je suis Hanafi Mohamed, diplômé Développeur Intégrateur Web
          chez OpenClassrooms. Je me spécialise dans la conception et
          l’intégration de sites web modernes et interactifs. J’ai acquis des
          compétences solides en HTML, CSS, JavaScript, React, Git, ainsi qu’en
          optimisation de l’accessibilité et du SEO. Actuellement, je suis à la
          recherche d’une alternance afin de mettre en pratique mes compétences,
          renforcer mon expertise et contribuer à des projets innovants. J’ai
          déjà commencé à postuler et à développer mon réseau, notamment sur
          LinkedIn.
        </p>
      </div>
    </div>
  );
}

export default Banner;
