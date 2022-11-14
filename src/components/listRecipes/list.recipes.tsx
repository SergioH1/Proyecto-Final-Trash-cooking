import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';
import { PictureRecipe } from '../pictureRecipe/picture.recipe';

export function ListRecipes() {
    const recipes = useSelector((store: iStore) => store.recipes);

    let template = (
        <>
            <h2 className="main-title"> ¿Tienes hambre?</h2>

            <div className="container-picture">
                {recipes
                    .filter((recipe) => recipe.origin === 'Asian')
                    .map((recipe) => (
                        <div className="card-wrapper">
                            <div className="card-recipe">
                                <PictureRecipe
                                    styles="picture--img"
                                    recipe={recipe}
                                ></PictureRecipe>
                            </div>
                            <h3 className="card-recipe--title">
                                {recipe.title}
                            </h3>
                        </div>
                    ))}

                {recipes
                    .filter((recipe) => recipe.origin === 'Spain')
                    .map((recipe) => (
                        <div className="card-wrapper">
                            <div className="card-recipe">
                                <PictureRecipe
                                    styles="picture--img"
                                    recipe={recipe}
                                ></PictureRecipe>
                            </div>
                            <h3 className="card-recipe--title">
                                {recipe.title}
                            </h3>
                        </div>
                    ))}

                {recipes
                    .filter((recipe) => recipe.origin === 'Isdi')
                    .map((recipe) => (
                        <div className="card-wrapper">
                            <div className="card-recipe">
                                <PictureRecipe
                                    styles="picture--img"
                                    recipe={recipe}
                                ></PictureRecipe>
                            </div>
                            <h3 className="card-recipe--title">
                                {' '}
                                {recipe.title}
                            </h3>
                        </div>
                    ))}
            </div>
        </>
    );

    return template;
}
