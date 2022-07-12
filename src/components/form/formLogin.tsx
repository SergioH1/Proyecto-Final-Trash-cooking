import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { HttpUser } from '../../services/http.user';

import { loadUserAction } from '../../reducer/user/user.action.creators';

export function FormLogin() {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    token: '',
    user: { id: '', userName: '', email: '', password: '', recipes: [] },
  });
  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    setFormData({
      token: '',
      user: { ...formData.user, [element.userName]: element.value },
    });
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await new HttpUser().loginUser(formData.user);
    console.log(response);

    if (response.token) {
      dispatch(loadUserAction(response));
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/home');
    }
  };

  let template = (
    <form onSubmit={handleSubmit}>
      <header className="form__header">
        <h2 className="form__title"> Login</h2>
        <p className="form__legend">
          Por favor introduce tu e-mail y contraseña
        </p>
      </header>
      <div className="for__item">
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          aria-label="Email"
          autoFocus
          required
          onChange={handleChange}
        />
        <label className="form_floating-label">Email</label>
      </div>
      <div className="for__item">
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          aria-label="Password"
          required
          onChange={handleChange}
        />
        <label className="form_floating-label">Password</label>
      </div>
      <button type="submit" className="form__submit">
        Login
      </button>
      <div className="form__hint">
        <p className="form__hint--text">
          ¿No tienes una cuenta? <Link to={'/register'}>Create una </Link>
        </p>
      </div>
    </form>
  );
  return template;
}
