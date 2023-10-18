import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWix,
} from "@fortawesome/free-brands-svg-icons";
import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer-basic">
      <div className="social">
        <a href="https://www.linkedin.com/in/christopher-chandra-9601bb1b9/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/ACHC30">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://chandrachristopher4.wixsite.com/my-site">
          <FontAwesomeIcon icon={faWix} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
