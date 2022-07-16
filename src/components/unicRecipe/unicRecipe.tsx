import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';
import { iRecipe } from '../../interfaces/interfaces';
import { PictureRecipe } from '../pictureRecipe/picture.recipe';

export function UnicRecipe() {
  const recipes = useSelector((store: iStore) => store.recipes);
  let template: JSX.Element;
  let featuredRecipe: iRecipe | undefined;
  featuredRecipe = recipes.find((recipe) => recipe.title === 'Ramen');
  if (featuredRecipe === undefined) {
    template = <p> loading</p>;
  } else {
    template = (
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
            <PictureRecipe
              styles="img-recipe--featured"
              recipe={featuredRecipe}
            ></PictureRecipe>
          </div>
        </div>
      </>
    );
  }
  return template;
}
