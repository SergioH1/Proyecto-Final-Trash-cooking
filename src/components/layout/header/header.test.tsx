import { fireEvent, render, screen } from '../../../utils/test.utils';

import { BrowserRouter } from 'react-router-dom';
import { Header } from './header';

import { usersReducer } from '../../../reducer/user/user.reducer';

const reducer = {
  user: usersReducer,
};

describe('Given the component header', () => {
  describe('When calling it', () => {
    test('Render header when I am not Logged in', () => {
      const preloadedState = {
        user: {
          _id: '',
          name: '',
          email: '',
          passwd: '',
          workouts: [],
          done: [],
          rol: '',
        },
      };
      render(
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>,
        {
          preloadedState,
          reducer,
        }
      );
      const result = screen.getByText(/login/i);
      expect(result).toBeInTheDocument();
    });
    test('Render header when I am Logged in', () => {
      const preloadedState = {
        user: {
          _id: '',
          userName: 'test',
        },
      };
      render(
        <BrowserRouter>
          <Header></Header>
        </BrowserRouter>,
        {
          preloadedState,
          reducer,
        }
      );

      const result = screen.getByText(/Logout/i);
      fireEvent.click(result);
      expect(result).toBeInTheDocument();
    });
  });
});
