import React from "react";
import "./competences.scss";
import data from "../../Datas/CompetencesData.json";
import HTMLImage from "../../styles/img/HTML.webp";
import CSSImage from "../../styles/img/CSS.webp";
import SASSImage from "../../styles/img/SASS.webp";
import JSImage from "../../styles/img/JS.webp";
import ReactImage from "../../styles/img/REACT.webp";
import ReduxImage from "../../styles/img/REDUX.webp";
import GitImage from "../../styles/img/GIT.webp";
import GithubImage from "../../styles/img/GITHUB.webp";
import FigmaImage from "../../styles/img/FIGMA.webp";
import SwaggerImage from "../../styles/img/SWAGGER.webp";

function CompetencesGallery() {
  return (
    <div>
      <h2 id="competences" className="titleProject">
        COMPÉTENCES & OUTILS
      </h2>
      <section className="gallery">
        {data.map((competence, index) => {
          let image = null;
          switch (competence.image) {
            case "HTML.webp":
              image = HTMLImage;
              break;
            case "CSS.webp":
              image = CSSImage;
              break;
            case "SASS.webp":
              image = SASSImage;
              break;
            case "JS.webp":
              image = JSImage;
              break;
            case "REACT.webp":
              image = ReactImage;
              break;
            case "REDUX.webp":
              image = ReduxImage;
              break;
            case "GIT.webp":
              image = GitImage;
              break;
            case "GITHUB.webp":
              image = GithubImage;
              break;
            case "FIGMA.webp":
              image = FigmaImage;
              break;
            case "SWAGGER.webp":
              image = SwaggerImage;
              break;
            default:
              break;
          }
          return (
            <div key={index} className="item">
              {/* Ajout de l'attribut loading="lazy" pour optimiser le chargement des images */}
              <img src={image} alt={competence.name} loading="lazy" />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CompetencesGallery;
