import React, { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';

import { aMenuItems } from './interfaces/interfaces';
import { Layout } from './components/layout/layout';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HttpRecipe } from './services/http.recipes';
import { loadRecipesAction } from './reducer/recipe.action.creators';

/* istanbul ignore file */
function App() {
  const dispatcher = useDispatch();
  const apiRecipes = useMemo(() => new HttpRecipe(), []);
  useEffect(() => {
    apiRecipes.getAllRecipes().then((recipes) => {
      dispatcher(loadRecipesAction);
    });
  }, [apiRecipes, dispatcher]);
  const HomePage = React.lazy(() => import('./pages/home'));
  const LoginPage = React.lazy(() => import('./pages/login'));
  const RegisterPage = React.lazy(() => import('./pages/register'));
  const RecipePage = React.lazy(() => import('./pages/recipe'));
  const PerfilPage = React.lazy(() => import('./pages/perfil'));
  const options: aMenuItems = [
    { path: '', label: 'Products', page: <HomePage /> },
    { path: '/login', label: 'Pack', page: <LoginPage /> },
    { path: '/register', label: 'Unit', page: <RegisterPage /> },
    { path: '/recipe', label: 'Unit', page: <RecipePage /> },
    { path: '/perfil', label: 'Unit', page: <PerfilPage /> },
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
