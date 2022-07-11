import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';

import './list.recipes.css';
export function ListRecipes() {
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
