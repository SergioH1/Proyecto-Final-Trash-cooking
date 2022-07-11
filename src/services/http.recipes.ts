import { iFood, iIngredient, iRecipe } from '../interfaces/interfaces';

export class HttpRecipe {
  url: string;
  constructor() {
    this.url = 'http://localhost:3700/recipes';
  }

  getAllRecipes(): Promise<Array<iRecipe>> {
    return fetch(this.url).then((resp) => resp.json());
  }

  getRecipe(id: iIngredient['id']): Promise<iRecipe> {
    return fetch(this.url + `/${id}`).then((resp) => resp.json());
  }
  updateIngredientRecipe = (
    id: iRecipe['id'],
    data: iFood
  ): Promise<iRecipe> => {
    return fetch(this.url + '/addIngredient/' + id, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  };
  updateKeywordsRecipe = (
    id: iRecipe['id'],
    data: string
  ): Promise<iRecipe> => {
    return fetch(this.url + '/addKeywords/' + id, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((resp) => resp.json());
  };
}
