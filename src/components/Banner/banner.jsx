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
          Bonjour, je suis Hanafi Mohamed, passionné par le numérique. En
          formation chez OpenClassrooms pour devenir développeur web, j’apprends
          à concevoir des sites. Mon objectif est d’intégrer une entreprise pour
          développer mes compétences et évoluer dans ce domaine.
        </p>
      </div>
    </div>
  );
}

export default Banner;
