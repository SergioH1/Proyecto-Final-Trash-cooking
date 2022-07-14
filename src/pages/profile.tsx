import { SyntheticEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { HttpUser } from '../services/http.user';

export function ProfilePage() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: '',
    userName: '',
    email: '',
    password: '',
    recipes: [],
  });
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const response = await new HttpUser().updateUser(formData);

    if (response.userName) {
      navigate('/login');
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
    setFormData({ ...formData, [element.name]: element.value });
  }

  let template = (
    <main className="page-content page-content--form">
      <form onSubmit={handleSubmit}>
        <header className="form__header">
          <h2 className="form__title"> My Cuenta</h2>
          <p className="form__legend">
            ¿Quieres cambiar la informacion de tu cuenta?:
          </p>
        </header>
        <div className="for__item">
          <input
            type="text"
            className="form__input"
            value={formData.userName}
            placeholder="Username"
            required
            onChange={handleChange}
            name="userName"
          />
        </div>

        <div className="form__item">
          <input
            type="email"
            className="form__input"
            value={formData.email}
            placeholder="Email"
            required
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form__item">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn1">
          Cambiar mi usuario
        </button>
      </form>
    </main>
  );

  return template;
}
export default ProfilePage;
