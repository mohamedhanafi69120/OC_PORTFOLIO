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
          Bonjour, je suis Hanafi Mohamed, passionné par le numérique.
          Actuellement en formation Développeur Intégrateur Web chez
          OpenClassrooms, je me spécialise dans la conception et l’intégration
          de sites web modernes et interactifs. Grâce à cette formation, j’ai
          acquis des compétences en HTML, CSS, JavaScript, React, Git ainsi
          qu’en optimisation de l’accessibilité et du SEO. Mon objectif est
          d’intégrer une entreprise afin de renforcer mon expertise et
          contribuer à des projets innovants.
        </p>
      </div>
    </div>
  );
}

export default Banner;
