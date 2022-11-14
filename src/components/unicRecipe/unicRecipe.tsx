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
                        <p className="featured">Receta destacada</p>
                        <h2 className="featured--img">
                            {(featuredRecipe as iRecipe).title}
                        </h2>
                        <p className="featured--text">
                            Resulta curioso pensar que el ramen apenas lleva más
                            de un siglo en Japón, siendo hoy uno de los platos
                            más cotidianos y populares de todo el país. Se
                            prepara en las casas familiares, hay miles de
                            versiones instantáneas y es una comida habitual para
                            el día a día, sobre todo en los puestos callejeros.
                            También hay restaurantes de ramen famosos con
                            recetas secretas y su presencia en la cultura
                            popular es constante. El ramen conquistó Japón y
                            ahora el mundo entero.
                        </p>
                    </div>
                    <picture className="container__grid--img">
                        <PictureRecipe
                            styles="img-recipe--featured"
                            recipe={featuredRecipe}
                        ></PictureRecipe>
                    </picture>
                </div>
            </>
        );
    }
    return template;
}
