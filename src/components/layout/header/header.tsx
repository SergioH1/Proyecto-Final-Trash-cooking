import { Link } from 'react-router-dom';

export function Header() {
  let template = (
    <>
      <header className="header__container">
        <hgroup className="title__container">
          <h2 className="title">Trash-cooking</h2>
          <h3 className="subtitle">キッチン</h3>
        </hgroup>
        <h3 className="header__container__pages">
          <Link to="/recipes">recetas</Link>
        </h3>
        <h3 className="header__container__pages">
          <Link to="/perfil">Perfil</Link>
        </h3>
        <h3 className="header__container__pages">
          <Link to="/login">Login</Link>
        </h3>
      </header>
    </>
  );
  return template;
}
