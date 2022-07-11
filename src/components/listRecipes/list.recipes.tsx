import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';
import { useDispatch } from 'react-redux';

import { useEffect, useMemo } from 'react';
import { HttpRecipe } from '../../services/http.recipes';
import { loadRecipesAction } from '../../reducer/recipes/recipe.action.creators';
import './list.recipes.css';
export function ListRecipes() {
  const dispatcher = useDispatch();
  const apiRecipes = useMemo(() => new HttpRecipe(), []);
  useEffect(() => {
    apiRecipes.getAllRecipes().then((recipes) => {
      dispatcher(loadRecipesAction(recipes));
      console.log(recipes);
    });
  }, [apiRecipes, dispatcher]);

  const recipes = useSelector((store: iStore) => store.recipes);

  let template = (
    <>
      <ul className="container-picture">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <img className="picture--img" src={recipe.img} alt={recipe.title} />
            <p> {recipe.title}</p>
          </li>
        ))}
      </ul>
    </>
  );

  return template;
}
