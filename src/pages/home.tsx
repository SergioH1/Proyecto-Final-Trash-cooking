import { ListRecipes } from '../components/listRecipes/list.recipes';
import { UnicRecipe } from '../components/unicRecipe/unicRecipe';
import './home.css';
export function HomePage() {
  let template = (
    <>
      <main className="main-container">
        <hgroup className="header-media">
          <h1 className="header-media--title">Trash-Cooking</h1>
          <h2 className="header-media--sub">キッチン</h2>
        </hgroup>

        <UnicRecipe></UnicRecipe>
        <ListRecipes></ListRecipes>
      </main>
    </>
  );
  return template;
}
export default HomePage;
