import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import { aMenuItems } from './interfaces/interfaces';
import { Layout } from './components/layout/layout';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useEffect, useMemo } from 'react';
import { HttpRecipe } from './services/http.recipes';
import { loadRecipesAction } from './reducer/recipes/recipe.action.creators';

import { updateUserAction } from './reducer/user/user.action.creators';
import { HttpUser } from './services/http.user';
import ProfilePage from './pages/perfil';

/* istanbul ignore file */
function App() {
  const dispatcher = useDispatch();
  const apiRecipes = useMemo(() => new HttpRecipe(), []);
  const apiUser = useMemo(() => new HttpUser(), []);
  useEffect(() => {
    apiRecipes.getAllRecipes().then((recipes) => {
      dispatcher(loadRecipesAction(recipes));
    })
    const token = localStorage.getItem('token');
    if (token) {
      apiUser.getUserByToken(token).then((data) => {
        dispatcher(updateUserAction(data));
      })
    }
  }, [apiRecipes, apiUser, dispatcher]);
  const HomePage = React.lazy(() => import('./pages/home'));
  const LoginPage = React.lazy(() => import('./pages/login'));
  const RegisterPage = React.lazy(() => import('./pages/register'));
  const RecipePage = React.lazy(() => import('./pages/recipe'));
  const SearchPage = React.lazy(() => import('./pages/search'));
  const options: aMenuItems = [
    { path: '/', label: 'Products', page: <HomePage /> },
    { path: '/login', label: 'Pack', page: <LoginPage /> },
    { path: '/register', label: 'Unit', page: <RegisterPage /> },
    { path: '/receta', label: 'Recipe', page: <RecipePage /> },
    { path: '/profile', label: 'Perfil', page: <ProfilePage /> },
    { path: '/search', label: 'Search', page: <SearchPage /> },
  ];
  return (
    <BrowserRouter>
      <Layout>
        <React.Suspense>
          <Routes>
            {options.map((item) => (
              <Route
                key={item.label}
                path={item.path}
                element={item.page}
              ></Route>
            ))}
          </Routes>
        </React.Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;