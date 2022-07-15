import { useSelector } from 'react-redux';

import { iStore } from '../app/store';
import { FormUpdate } from '../components/form/form.update';
import { PictureRecipe } from '../components/pictureRecipe/picture.recipe';

export function ProfilePage() {
  //  const location = useLocation();
  //  const stateRecipe = location.state as { recipe: iRecipe };
  const storeUser = useSelector((store: iStore) => store.user);
  console.log(storeUser);
  let template: JSX.Element;

  template = (
    <>
      <main className="page-content page-content--form">
        <FormUpdate></FormUpdate>
      </main>
      {storeUser && (
        <div className="">
          <h2> Mis Recetas Favoritas</h2>
          <ul>
            {storeUser.user.recipes?.map((recipe) => (
              <li key={recipe._id}>
                <PictureRecipe
                  styles="picture--img"
                  recipe={recipe}
                ></PictureRecipe>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
  return template;
}

export default ProfilePage;
