import React from "react";
import "./header.scss";
import PcPic from "../../styles/img/pc.webp";

function Header() {
  return (
    <header>
      <div className="image-container-pc">
        {/* Ajout de loading="lazy" pour optimiser le chargement de l'image */}
        <img src={PcPic} alt="Image d'une personne avec PC portable" />
      </div>
      <nav>
        <a
          className="no-underline"
          href="#project"
          aria-label="Ancre activer pour Aller à la section Projets"
        >
          Projets
        </a>
        <a
          className="no-underline"
          href="#competences"
          aria-label="Ancre activer pour Aller à la section Compétences"
        >
          Compétences
        </a>
        <a
          className="no-underline"
          href="#contactMoov"
          aria-label="Ancre activer pour Aller à la section Contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
