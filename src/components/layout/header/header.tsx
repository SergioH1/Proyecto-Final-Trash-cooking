import { Link } from 'react-router-dom';
import './header.css';
export function Header() {
  let template = (
    <>
      <header className="header__container">
        <div>
          <hgroup className="title__container">
            <Link to="/" className="title">
              <h2 className="title">Trash-cooking</h2>{' '}
            </Link>

            <h3 className="subtitle">キッチン</h3>
          </hgroup>
        </div>
        <h3 className="header__container__pages">
          <Link className="header__container__pages" to="/search">
            ¿Qué tienes en la nevera?
          </Link>
        </h3>
        <h3 className="header__container__pages">
          <Link className="header__container__pages" to="/profile">
            Mis recetas
          </Link>
        </h3>

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
