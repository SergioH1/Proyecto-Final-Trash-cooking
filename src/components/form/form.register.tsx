import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userWithToken } from '../../interfaces/interfaces';
import { HttpUser } from '../../services/http.user';
import * as ac from '../../reducer/user/user.action.creators';


export function FormLogin() {
  let navigate = useNavigate();
  const api = new HttpUser();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  function handleChange(ev: SyntheticEvent) {}

  function handleSubmit(ev: SyntheticEvent) {}

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
          type="text"
          className="form__input"
          placeholder="Username"
          aria-label="Username"
          autoFocus
          required
          onChange={handleChange}
        />
        <label className="form_floating-label">Username</label>
      </div>

      <div className="form__item">
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
      <div className="form__item">
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
        Crear mi usuario
      </button>
      <div className="form__hint">
        <p className="form__hint--text"></p>
      </div>
    </form>
  );
  return template;
}
