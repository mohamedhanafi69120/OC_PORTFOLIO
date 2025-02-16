import "./footer.scss";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Mohamed Hanafi. Tous droits réservés.</p>

      <div className="logo">
        {/* Ajout des liens vers GitHub et LinkedIn avec icônes et aria-label */}
        <a
          href="https://github.com/mohamedhanafi69120"
          aria-label=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/mohamed-hanafi-a11237334/"
          aria-label=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
