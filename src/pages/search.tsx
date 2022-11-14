import { SearchMultiple } from '../components/search/search.multiple';
import './search.css';
export function SearchPage() {
  let template = (
    <>
      <main className="page-content">
        <h2> ¿Que tienes en la nevera?</h2>

        <SearchMultiple></SearchMultiple>
      </main>
    </>
  );
  return template;
}
export default SearchPage;
