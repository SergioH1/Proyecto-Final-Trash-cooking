import { Link } from 'react-router-dom';
import { iRecipe } from '../../interfaces/interfaces';

export function PictureRecipe({ recipe }: { recipe: iRecipe }) {
  return (
    <Link to={'/receta'} state={{ recipe }}>
      <label>
        <img className="picture--img" src={recipe.img} alt={recipe.title} />
      </label>
    </Link>
  );
}
