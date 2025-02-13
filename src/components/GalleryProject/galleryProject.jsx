import React from "react";
import projects from "../../Datas/ProjectsData.json";
import "./galleryProject.scss";
import BookiImage from "../../styles/img/Booki.webp";
import OhMyFoodImage from "../../styles/img/ohmyfood.webp";
import SophieBluelImage from "../../styles/img/sophie-bluel.webp";
import NinaCarducciImage from "../../styles/img/Ninacarducci.webp";
import KasaImage from "../../styles/img/Kasa.webp";
import ArgentBankImage from "../../styles/img/argentBank.webp";

function GalleryProject() {
  return (
    <div>
      <h2 id="project" className="titleProject">
        MES PROJETS
      </h2>

      <section className="mesProjets">
        <div className="contenairAllProject">
          {projects.map((project, index) => {
            let image = null;
            switch (project.imageFileName) {
              case "Booki.webp":
                image = BookiImage;
                break;
              case "ohmyfood.webp":
                image = OhMyFoodImage;
                break;
              case "sophie-bluel.webp":
                image = SophieBluelImage;
                break;
              case "Ninacarducci.webp":
                image = NinaCarducciImage;
                break;
              case "Kasa.webp":
                image = KasaImage;
                break;
              case "argentBank.webp":
                image = ArgentBankImage;
                break;
              default:
                break;
            }
            return (
              <div key={index} className="containerTextImage">
                <div className="textProject">{project.title}</div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Ajout de loading="lazy" pour améliorer les performances */}
                  <img src={image} alt={`Projet ${project.title}`} />
                  <span>Cliquer pour voir</span>
                </a>
                <div className="description-project">
                  <div className="competences">
                    <h3>Descriptions</h3>
                    <ul>
                      {/* Affichage des descriptions */}
                      {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="competences">
                    <h3>Compétences</h3>
                    <ul>
                      {/* Affichage des compétences */}
                      {project.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default GalleryProject;
