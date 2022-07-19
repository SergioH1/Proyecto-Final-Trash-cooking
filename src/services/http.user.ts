import { iUser, userWithToken } from '../interfaces/interfaces';
import { getToken } from '../utils/getToken';

export class HttpUser {
  url: string;
  constructor() {
    this.url = 'http://localhost:3700/user';
  }
  getAllUsers(): Promise<iUser[]> {
    return fetch(this.url).then((resp) => resp.json());
  }
  getUserByToken(token: string): Promise<iUser> {
    return fetch('http://localhost:3700/user/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    }).then((resp) => resp.json());
  }

  getUser(user: iUser): Promise<iUser> {
    return fetch(this.url + `/${user._id}`).then((resp) => resp.json());
  }

  registerUser(user: iUser): Promise<iUser> {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'content-type': 'application/json' },
    }).then((resp) => resp.json());
  }

  loginUser(user: Partial<iUser>): Promise<userWithToken> {
    return fetch(this.url + '/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'content-type': 'application/json' },
    }).then((resp) => resp.json());
  }

  updateUser(user: iUser): Promise<iUser> {
    return fetch(this.url + `/${user._id}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: { 'content-type': 'application/json' },
    }).then((resp) => resp.json());
  }

  deleteUser(_id: string): Promise<number> {
    return fetch(this.url + `/${_id}`, {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + getToken() },
    }).then((resp) => resp.status);
  }

  addToFavorites(id: string) {
    return fetch(this.url + '/addrecipes/' + id, {
      method: 'PATCH',
      headers: { Authorization: 'Bearer ' + getToken() },
    }).then((resp) => resp.json());
  }
  deleteFavorites(id: string) {
    return fetch(this.url + '/deleterecipes/' + id, {
      method: 'PATCH',
      headers: { Authorization: 'Bearer ' + getToken() },
    }).then((resp) => resp.json());
  }
}
