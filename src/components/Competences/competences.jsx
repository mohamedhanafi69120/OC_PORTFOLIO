import React from "react";
import "./competences.scss";
import data from "../../Datas/CompetencesData.json";
import HTMLImage from "../../sass/img/HTML.webp";
import CSSImage from "../../sass/img/CSS.webp";
import SASSImage from "../../sass/img/SASS.webp";
import JSImage from "../../sass/img/JS.webp";
import ReactImage from "../../sass/img/REACT.webp";
import ReduxImage from "../../sass/img/REDUX.webp";
import GitImage from "../../sass/img/GIT.webp";
import GithubImage from "../../sass/img/GITHUB.webp";
import FigmaImage from "../../sass/img/FIGMA.webp";
import SwaggerImage from "../../sass/img/SWAGGER.webp";

function CompetencesGallery() {
  return (
    <div>
      <h2 id="competences" className="titleProject">
        COMPÉTENCES
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
