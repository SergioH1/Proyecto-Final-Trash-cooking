import { iRecipe } from '../../interfaces/interfaces';

export function DetailsRecipe({ recipe }: { recipe: iRecipe }) {
  let template = (
    <>
      <div>
        <h3> Receta </h3>
        <h2> {recipe.title}</h2>
        <img src={recipe.img} alt={recipe.title} />
      </div>

      <div>
        <div>
          <h4> Ingredientes </h4>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.ingredient.name}>
                {ingredient.ingredient.name +
                  ' : ' +
                  ingredient.amount +
                  ingredient.measure}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3> Pasos a seguir </h3>
          <p>{recipe.content}</p>
        </div>
      </div>
    </>
  );
  return template;
}
