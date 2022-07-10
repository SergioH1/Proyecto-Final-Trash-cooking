import { iIngredient, iRecipe } from '../interfaces/interfaces';

export class HttpRecipe {
  url: string;
  constructor() {
    this.url = 'http://localhost:3700/recipe';
  }

  getAllRecipes(): Promise<iRecipe[]> {
    return fetch(this.url).then((resp) => resp.json());
  }

  getRecipe(id: iIngredient['id']): Promise<iRecipe> {
    return fetch(this.url + `/${id}`).then((resp) => resp.json());
  }
}
