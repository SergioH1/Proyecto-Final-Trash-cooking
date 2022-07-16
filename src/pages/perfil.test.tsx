/* eslint-disable @typescript-eslint/no-unused-expressions */
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ProfilePage from './perfil';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path',
    state: {
      recipe: {
        img: 's',
        title: '3',
        ingredients: [
          {
            ingredient: {
              name: '',
            },
            ammout: 1,
            meassure: '3',
          },
        ],
      },
    },
  }),
}));
const mockAppState = {
  user: {
    recipes: [
      {
        img: 'ssasa',
        title: '3',
        ingredients: [
          {
            ingredient: {
              name: '',
            },
            ammout: 1,
            meassure: '3',
          },
        ],
      },
    ],
  },
};
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
describe('Given the page Perfil page', () => {
  (useSelector as jest.Mock).mockImplementation((callback: any) => {
    return callback(mockAppState);
  });
});
afterEach(() => {
  (useSelector as jest.Mock).mockClear();
});
describe('When it is called', () => {
  test('them rendered a "Favoritas', () => {
    render(
      <MemoryRouter>
        <ProfilePage></ProfilePage>
      </MemoryRouter>
    );

    const display = screen.getByText(/Cuenta/);
    expect(display).toBeInTheDocument();
  });
});
