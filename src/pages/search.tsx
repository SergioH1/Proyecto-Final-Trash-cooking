import { SearchMultiple } from '../components/search/search.multiple';

export function SearchPage() {
  let template = (
    <>
      <h2> ¿Que tienes en la nevera?</h2>
      <SearchMultiple></SearchMultiple>
    </>
  );
  return template;
}
export default SearchPage;
