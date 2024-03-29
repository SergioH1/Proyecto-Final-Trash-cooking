import { useSelector } from 'react-redux';

import { iStore } from '../app/store';
import { DeleteRecipesFav } from '../components/button/delete.recipes.fav';

import { PictureRecipe } from '../components/pictureRecipe/picture.recipe';

export function ProfilePage() {
    const storeUser = useSelector((store: iStore) => store.user);

    let template: JSX.Element;

    template = (
        <>
            <div className="page-content">
                {storeUser && (
                    <div className="main-container">
                        <h2> Mis Recetas Favoritas</h2>
                        <ul className="container-picture">
                            {storeUser.recipes?.map((recipe) => (
                                <li key={recipe._id}>
                                    <div className="card-wrapper">
                                        <div className="card-recipe">
                                            <PictureRecipe
                                                styles="picture--poster"
                                                recipe={recipe}
                                            ></PictureRecipe>
                                        </div>
                                        <h3 className="card-recipe--title">
                                            {' '}
                                            {recipe.title}
                                        </h3>
                                        <DeleteRecipesFav
                                            id={recipe._id as string}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
    return template;
}

export default ProfilePage;
