import React from "react";
import MoiImage from "../../styles/img/moi.webp";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <h1>Portfolio de Mohamed</h1>
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
          En tant que Développeur-Intégrateur web, je transforme vos designs en
          sites web interactifs. Maîtrisant HTML, CSS, JavaScript et son
          framework React, je crée des expériences numériques exceptionnelles.
          Travaillons ensemble pour donner vie à votre vision en ligne.
        </p>
      </div>
    </div>
  );
}

export default Banner;
