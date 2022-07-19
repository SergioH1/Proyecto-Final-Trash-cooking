import { useSelector } from 'react-redux';
import { iStore } from '../../app/store';

import Select from 'react-select';
import { SyntheticEvent, useEffect, useState } from 'react';
import { iRecipe } from '../../interfaces/interfaces';
import { HttpRecipe } from '../../services/http.recipes';
import { PictureRecipe } from '../pictureRecipe/picture.recipe';
import './search.css';
interface iOptions extends SyntheticEvent {
  value: string;
  label: string;
}
export function SearchMultiple() {
  const recipes = useSelector((store: iStore) => store.recipes);

  let keywords = recipes.map((recipe) => recipe.keywords);
  let keywordsArray = keywords.flat();
  const filterKeywords = [...new Set(keywordsArray)];
  const options: Array<Partial<iOptions>> = filterKeywords.map((item) => ({
    value: item,
    label: item,
  }));

  const [searchData, setSearchData] = useState(['0']);
  const [response, setResponse] = useState([] as Array<iRecipe>);

  useEffect(() => {
    searchRecipes(searchData as [string]).then((resp) => setResponse(resp));
  }, [searchData]);

  async function searchRecipes(search: [string]) {
    return new HttpRecipe().getByingredient(search);
  }

  const handleChange: any = async (ev: [iOptions]) => {
    const query = ev.map((value) => value.value);
    setSearchData(query);
  };

  let template = (
    <>
      <Select
        isMulti={true}
        isClearable={true}
        name="search"
        options={options}
        onChange={handleChange}
      />

      {response
        ? response.map((recipe) => {
            return (
              <div className="card-wrapper">
                <div className="card-recipe">
                  <PictureRecipe
                    styles="picture--img"
                    recipe={recipe}
                  ></PictureRecipe>
                </div>
                <h3 className="card-recipe--title"> {recipe.title}</h3>
              </div>
            );
          })
        : ''}
    </>
  );
  return template;
}
