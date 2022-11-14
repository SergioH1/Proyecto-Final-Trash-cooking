import { useDispatch } from 'react-redux';

import { updateUserAction } from '../../reducer/user/user.action.creators';
import { HttpUser } from '../../services/http.user';

export function DeleteRecipesFav({ id }: { id: string }) {
    const dispatcher = useDispatch();

    async function handleclick() {
        const response = await new HttpUser().deleteFavorites(id);
        dispatcher(updateUserAction(response));
    }

    let template = (
        <button className="buttonRemove" onClick={handleclick}>
            Eliminar Receta
        </button>
    );

    return template;
}
