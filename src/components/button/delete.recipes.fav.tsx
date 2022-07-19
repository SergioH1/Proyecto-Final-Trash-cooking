import { useDispatch } from 'react-redux';

import { updateUserAction } from '../../reducer/user/user.action.creators';
import { HttpUser } from '../../services/http.user';

export function DeleteRecipesFav({ id }: { id: string }) {
  const dispatcher = useDispatch();

  function handleclick() {
    new HttpUser().deleteFavorites(id).then((data) => {
      dispatcher(updateUserAction(data));
    });
  }

  let template = (
    <button className="buttonRemove" onClick={() => handleclick()}>
      Eliminar Receta
    </button>
  );

  return template;
}
