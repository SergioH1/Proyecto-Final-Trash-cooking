import { useSelector } from 'react-redux';

import { iStore } from '../app/store';
import { FormUpdate } from '../components/form/form.update';
import { PictureRecipe } from '../components/pictureRecipe/picture.recipe';

export function ProfilePage() {
  const storeUser = useSelector((store: iStore) => store.user);

  let template: JSX.Element;

  template = (
    <>
      <FormUpdate></FormUpdate>
      {storeUser && (
        <div className="main-container">
          <h2> Mis Recetas Favoritas</h2>
          <ul className="container-picture">
            {storeUser.recipes?.map((recipe) => (
              <li key={recipe._id}>
                <div className="card-wrapper">
                  <div className="card-recipe">
                    <PictureRecipe
                      styles="picture--img"
                      recipe={recipe}
                    ></PictureRecipe>
                  </div>
                  <h3 className="card-recipe--title"> {recipe.title}</h3>
                </div>
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
