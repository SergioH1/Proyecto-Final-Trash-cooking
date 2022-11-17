import { iIngredient } from '../interfaces/interfaces';

export class HttpIngredient {
    url: string;
    constructor() {
        this.url = 'https://trash-cooking-backend.onrender.com/ingredient';
    }

    getAllIngredients(): Promise<iIngredient[]> {
        return fetch(this.url).then((resp) => resp.json());
    }

    getIngredient(id: iIngredient['id']): Promise<iIngredient> {
        return fetch(this.url + `/${id}`).then((resp) => resp.json());
    }
}
