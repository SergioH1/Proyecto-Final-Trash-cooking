import { Link } from 'react-router-dom';
import './header.css';
export function Header() {
  let template = (
    <>
      <header className="header__container">
        <h3 className="header__container__pages">
          <Link className="header__container__pages" to="/recetas">
            Recetas
          </Link>
        </h3>
        <h3 className="header__container__pages">
          <Link className="header__container__pages" to="/perfil">
            Perfil
          </Link>
        </h3>
        <hgroup className="title__container">
          <h2 className="title">Trash-cooking</h2>
          <h3 className="subtitle">キッチン</h3>
        </hgroup>
        <h3 className="header__container__pages">
          <Link className="header__container__pages" to="/login">
            Login
          </Link>
        </h3>
      </header>
    </>
  );
  return template;
}
