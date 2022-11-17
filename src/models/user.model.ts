import { iRecipe, iUser } from '../interfaces/interfaces';

export class User implements iUser {
    constructor(
        public userName: string,
        public email: string,
        public password: string,
        public recipes: Array<iRecipe>,
        public _id: string
    ) {}
}
