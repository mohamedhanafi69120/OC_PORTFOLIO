import React from "react";
import "./header.scss";
import PcPic from "../../styles/img/pc.png";

function Header() {
  return (
    <header>
      <div className="image-container-pc">
        <img src={PcPic} alt="picpc" />
      </div>

      <nav>
        <a className="no-underline" href="#project">
          Projets
        </a>
        <a className="no-underline" href="#competences">
          Compétences
        </a>
        <a className="no-underline" href="#contactMoov">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
