import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { iRecipe } from '../interfaces/interfaces';

import { updateUserAction } from '../reducer/user/user.action.creators';
import { HttpUser } from '../services/http.user';
import './recipe.css';
export function RecipePage() {
  const location = useLocation();
  const stateRecipe = location.state as { recipe: iRecipe };

  const dispatch = useDispatch();
  function handleFav() {
    new HttpUser()
      .addToFavorites(stateRecipe.recipe._id as string)
      .then((resp) => {
        dispatch(updateUserAction(resp));
      });
  }
  let template = (
    <>
      <main className="main-container">
        <div className="container-flex-details">
          <h3> Receta </h3>
          <h2> {stateRecipe.recipe.title}</h2>
          <figure className="details--img">
            <img src={stateRecipe.recipe.img} alt={stateRecipe.recipe.title} />

            <figcaption>
              <h2>{stateRecipe.recipe.title}</h2>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                odio in labore obcaecati, magnam aliquam, illum iure, nihil
                cupiditate repudiandae corrupti inventore sed dolor quia eum
                ducimus animi quaerat? Architecto.
              </h4>
            </figcaption>
          </figure>

          <button
            onClick={() => {
              handleFav();
            }}
          >
            FAVORITOS
          </button>
        </div>

        <div className="container-grid--content">
          <div className="recipe--ingredient">
            <h4> Ingredientes </h4>
            <ul>
              {stateRecipe.recipe.ingredients.map((ingredient) => (
                <li key={ingredient.ingredient.name}>
                  {ingredient.ingredient.name +
                    ' : ' +
                    ingredient.amount +
                    ingredient.measure}
                </li>
              ))}
            </ul>
          </div>
          <div className="recipe--content">
            <h3> Pasos a seguir </h3>
            <p>{stateRecipe.recipe.content}</p>
          </div>
        </div>
      </main>
    </>
  );

  return template;
}
export default RecipePage;
