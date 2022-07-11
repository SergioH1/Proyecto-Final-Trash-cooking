import { Layout } from '../components/layout/layout';
import { ListRecipes } from '../components/listRecipes/list.recipes';

export function HomePage() {
  let template = (
    <>
      <Layout>
        <ListRecipes></ListRecipes>
      </Layout>
    </>
  );
  return template;
}
export default HomePage;
