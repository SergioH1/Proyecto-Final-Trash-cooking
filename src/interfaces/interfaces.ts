import { ReactElement } from 'react';

export interface iRecipe {
    _id?: string;
    title: string;
    origin: string;
    content: string;
    img: string;
    ingredients: Array<iFood>;
    keywords: Array<string>;
}
export interface iFood {
    ingredient: iIngredient;
    amount: number;
    measure: string;
}
export interface iIngredient {
    id: string;
    name: string;
    category: string;
}
export interface iUser {
    _id?: string;

    userName: string;
    email: string;
    password: string;

    recipes?: Array<iRecipe>;
}
export interface userWithToken {
    token: string;
    user: iUser;
}
export interface iMenuItem {
    path: string;
    label: string;
    page: ReactElement;
}

export type aMenuItems = Array<iMenuItem>;
