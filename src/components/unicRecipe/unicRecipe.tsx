import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';
import { iRecipe } from '../../interfaces/interfaces';

export function UnicRecipe() {
  const recipes = useSelector((store: iStore) => store.recipes);
  const featuredRecipe = recipes.find((recipe) => recipe.title === 'Ramen');
  let template = (
    <>
      <div className="container__grid-recipe">
        <div className="container__grid--text">
          <h2>Receta destacada</h2>
          <h2>{(featuredRecipe as iRecipe).title}</h2>
          <p>
            Un buen cuenco de ramen alimenta cuerpo y alma, está cargado de
            sabores y es reconfortante y nutritivo
          </p>
        </div>
        <div className="container__grid--img">
          <img
            src={(featuredRecipe as iRecipe).img}
            alt={(featuredRecipe as iRecipe).title}
          />
        </div>
      </div>
    </>
  );
  return template;
}
