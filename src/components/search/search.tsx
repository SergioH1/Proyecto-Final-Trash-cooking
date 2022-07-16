import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';
import './search.css';

export function SearchMultiple() {
  const storeRecipes = useSelector((store: iStore) => store.recipes);

  let template = (
    <>
      <div className="container-search">
        <input
          type="text"
          className="form__input for__input--search"
          // value={}
          placeholder="Ingredientes"
          required
          // onChange={}
          name="ingredients"
        />

        <img
          role="button"
          className="icon-search"
          src="./icons/search.svg"
          alt=""
        />
      </div>

      <div className="container-search">
        <ul className="container-completed">
          <h3> Esto puedes cocinar </h3>
          <li></li>
        </ul>
        <ul className="container-completed">
          <li> Recetas </li>
        </ul>
      </div>
    </>
  );
  return template;
}
