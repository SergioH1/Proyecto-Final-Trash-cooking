import { DeleteAcount } from '../../button/delete.acount';
import './footer.css';
export function Footer() {
  let template = (
    <footer className="footer__container">
      <p
        className="
quotes"
      >
        “El descubrimiento de un nuevo plato es de más provecho para la
        humanidad que el descubrimiento de una estrella.”
      </p>
      <p className="connect"> Contact with me</p>
      <div className="icon-container">
        <img className="icons" src="./icons/github.png" alt="github" />
        <img className="icons" src="./icons/linkedin.png" alt="linkedin" />
        <img className="icons" src="./icons/pinterest.png" alt="pinterest" />
        <img className="icons" src="./icons/instagram.png" alt="instagram" />
      </div>

      <small className="privace-legacy">
        2022 Trash-cooking | Terms & Conditions | Privacy Policy
      </small>
      <DeleteAcount></DeleteAcount>
    </footer>
  );
  return template;
}