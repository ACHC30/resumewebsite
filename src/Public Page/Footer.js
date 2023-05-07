import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div class="footer-basic">
      <head>
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <footer>
        <div class="social">
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
        <p class="copyright">Christopher Chandra © 2023</p>
      </footer>
    </div>
  );
}

export default Footer;
