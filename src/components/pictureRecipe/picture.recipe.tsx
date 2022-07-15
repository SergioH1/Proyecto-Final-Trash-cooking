import { Link } from 'react-router-dom';
import { iRecipe } from '../../interfaces/interfaces';

export function PictureRecipe({
  recipe,
  styles,
}: {
  recipe: iRecipe;
  styles: string;
}) {
  return (
    <Link to={'/receta'} state={{ recipe, styles }}>
      <label>
        <img className={styles} src={recipe.img} alt={recipe.title} />
      </label>
    </Link>
  );
}
