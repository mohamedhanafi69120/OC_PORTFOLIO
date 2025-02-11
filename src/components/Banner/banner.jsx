import React from "react";
import MoiImage from "../../styles/img/moi.webp"; // Chargement de l'image optimisée au format WebP
import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <h1>Portfolio de Mohamed</h1> {/* Ajout du titre principal */}
      <div className="image-container">
        <img
          src={MoiImage}
          alt="Moi"
          className="profile-picture"
          loading="lazy" // Ajout du lazy loading pour optimiser le chargement de l'image
        />
      </div>
      <div className="presentation">
        <h2>Mohamed Hanafi</h2>
        <h3>Intégrateur Web</h3>
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
