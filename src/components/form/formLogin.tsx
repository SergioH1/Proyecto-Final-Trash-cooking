import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { HttpUser } from '../../services/http.user';

import { loadUserAction } from '../../reducer/user/user.action.creators';
import './form.css';
import Swal from 'sweetalert2';
export function FormLogin() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    user: { id: '', userName: '', email: '', password: '', recipes: [] },
  });
  let navigate = useNavigate();

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await new HttpUser().loginUser(formData.user);

    if (response.token) {
      dispatch(loadUserAction(response));
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/home');
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  };
  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    setFormData({
      user: { ...formData.user, [element.name]: element.value },
    });
  }

  let template = (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <header className="form__header">
          <h2 className="form__title"> LOGIN</h2>
          <p className="form__legend">
            Por favor, introduce tu e-mail y contraseña
          </p>
        </header>
        <div className="for__item">
          <input
            type="email"
            className="form__input"
            value={formData.user.email}
            placeholder="Email"
            autoFocus
            required
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="for__item">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            required
            value={formData.user.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <div className="form__hint">
          <button type="submit" className="btn btn1">
            Login
          </button>
          <p className="form__hint--text">
            ¿No tienes una cuenta? <Link to={'/register'}>Create una </Link>
          </p>
        </div>
      </form>
    </div>
  );
  return template;
}
