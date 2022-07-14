import { ListRecipes } from '../components/listRecipes/list.recipes';
import { UnicRecipe } from '../components/unicRecipe/unicRecipe';

export function HomePage() {
  let template = (
    <>
      <UnicRecipe></UnicRecipe>
      <ListRecipes></ListRecipes>
    </>
  );
  return template;
}
export default HomePage;
