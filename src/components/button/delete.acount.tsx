import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import { iStore } from '../../app/store';
import { HttpUser } from '../../services/http.user';

export function DeleteAcount() {
  const user = useSelector((store: iStore) => store.user);
  async function deleteUser(ev: SyntheticEvent) {
    Swal.fire({
      title: '¿Estás seguro de eliminar la cuenta?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Usuario  borrado');
        ev.preventDefault();
        await new HttpUser().deleteUser(user._id as string);
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
      } else {
        Swal.fire('Usuario no borrado');
        return;
      }
    });
  }
  let template = (
    <>
      <div className="form__item">
        <button onClick={deleteUser} className="btn btn1 btn2" type="submit">
          Eliminar cuenta
        </button>
      </div>
    </>
  );

  return template;
}
