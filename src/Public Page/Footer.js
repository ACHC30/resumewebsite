import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
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
        <a href="https://www.facebook.com/profile.php?id=100007759308572">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <p className="copyright">Christopher Chandra © 2023</p>
    </div>
  );
}

export default Footer;
