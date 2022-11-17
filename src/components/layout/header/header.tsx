import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { iStore } from '../../../app/store';
import './header.css';
export function Header() {
    const user = useSelector((store: iStore) => store.user);
    let template;
    let navigate = useNavigate();
    function handleSubmit() {
        localStorage.clear();
        navigate('/home');
    }

    if (!user.userName) {
        template = (
            <>
                <header className="header__container">
                    <div>
                        <hgroup className="title__container">
                            <Link to="/" className="title">
                                <h2 className="title">Trash-cooking</h2>
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
                        <Link className="header__container__pages" to="/login">
                            Login
                        </Link>
                    </h3>
                </header>
                ;
            </>
        );
    } else {
        template = (
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
                        <Link
                            className="header__container__pages"
                            to="/profile"
                        >
                            Mis recetas
                        </Link>
                    </h3>

                    <h3
                        onClick={handleSubmit}
                        role="button"
                        className="header__container__pages logout"
                    >
                        Logout
                    </h3>
                </header>
            </>
        );
    }
    return template;
}
